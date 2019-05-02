const path = require('path');
const fs = require('fs');

module.exports = function() {
  // 这是可视化传递的小程序项目配置
  const config = {
    projectName: 'laosha5',
    versionName: '1.2.2',
    versionCode: '122',
    theme: {
      // $ 由正则匹配的时候写死 \$ ,目的是为了方便写正则（转义）
      'fm-color': '#39f',
      'fm-font-color1': '#ccc'
    },
    components: {
      // 整个项目中所有页面用到的公用组件
      use: [
        {
          fileName: 'search-bar',
          componentName: 'SearchBar'
        },
        {
          fileName: 'address',
          componentName: 'Address'
        },
        {
          fileName: 'entry-list',
          componentName: 'EntryList'
        }
      ]
    },
    pages: {
      index: {
        path: 'pages/index/index',
        style: {
          navigationBarTitleText: `老沙外卖-1`
        },
        components: [
          {
            fileName: 'search-bar', // 必须对应组件库的文件夹名称
            componentName: 'SearchBar'
          },
          {
            fileName: 'address',
            componentName: 'Address'
          },
          {
            fileName: 'entry-list',
            componentName: 'EntryList'
          }
        ]
      }
    }
  };

  const { pages, projectName, theme, components, versionName, versionCode } = config;

  /**
   * TODO
   * 输出 main.js 替换组件注册
   * manifest.json 修改项目信息、appId、版本号等
   */

  const run = () => {
    try {
      createPages();
      updatePageConfig();
      updateMainJs();
      copyComponents();
      copyCommonDir('styles', 'var.scss');
      copyCommonDir('utils');
      copyCommonDir('static');
      copyOneFile('App.vue');
      copyOneFile('uni.scss');
      updateStyleTheme();
      copyManifest();
    } catch (err) {
      throw err;
    }
  };

  // !!! 只能删除空文件夹，所以必须先清除所有文件，再清除空文件夹
  /* fs.rmdir(path.join(__dirname, `dist/${projectName}`), err => {
    try {
      run();
    } catch (err) {
      if (err.code === 'ENOENT') {
        fs.mkdir(
          err.path,
          {
            recursive: true
          },
          run
        );
      }
    }
  }); */

  delDir(`dist/${projectName}`)
    .then(run)

  function delDir(url) {
    return new Promise(resolve => {
      const _path = path.join(__dirname, url);
      _del(_path)
  
      function _del(_url) {
        if (fs.existsSync(_url)) {
          fs.readdirSync(_url).forEach((file, index) => {
            const curPath = _url + '/' + file;
    
            if (fs.statSync(curPath).isDirectory()) {
              _del(curPath); //递归删除文件夹
            } else {
              fs.unlinkSync(curPath); //删除文件
            }
          });
          if (_path !== _url) fs.rmdirSync(_url);
        }
      }
      resolve();
      // fs.mkdir(_path, resolve);
    })
  }

  // 拷贝 manifest.json
  function copyManifest() {
    fs.readFile('./components-lib/manifest.json', 'utf8', (err, data) => {
      if (err) throw err;

      const _config = JSON.parse(data);
      const newConfig = {
        ..._config,
        versionName,
        versionCode
      };

      fs.writeFile(
        `./dist/${projectName}/manifest.json`,
        JSON.stringify(newConfig),
        {
          encoding: 'utf8'
        },
        err => {
          console.log('输出了 manifest.json');
        }
      );
    });
  }

  // 按需拷贝通用组件
  function copyComponents() {
    const from = `./components-lib/components`;
    const to = `./dist/${projectName}/components`;
    const _components = components.use.map(item => item.fileName);

    checkDirectory(from, to, (src, dest, stats) => {
      const isFile = stats.isFile();
      if (isFile) {
        const has = _components.some(item => src.includes(item));

        if (has) {
          fs.readFile(src, 'utf8', (err, data) => {
            if (err) throw err;

            fs.writeFile(dest, data, () => {
              console.log(`输出了 公共组件 ${dest}`);
            });
          });
        }
      }
    });
  }

  // 修改 main.js 按需引入全局组件
  function updateMainJs() {
    const start = '\\/\\*\\s*@fm-register-component-start\\s*\\*\\/';
    const end = '\\/\\*\\s*@fm-register-component-end\\s*\\*\\/';

    fs.readFile('./components-lib/main.js', 'utf8', (err, data) => {
      if (err) throw err;

      const _components = components.use.reduce((prev, current) => {
        const { componentName, fileName } = current;

        return (
          prev +
          `
          import ${componentName} from './components/common/${fileName}';
          Vue.component('${componentName}', ${componentName});
        `
        );
      }, '');

      const _data = replaceComment({
        start,
        end,
        content: data,
        replaceContent: _components
      });

      fs.writeFile(`./dist/${projectName}/main.js`, _data, 'utf8', err => {
        if (err) console.log('err:_____', err);
      });
    });
  }

  // 修改 var.scss 的相关颜色
  function updateStyleTheme() {
    fs.readFile('./components-lib/styles/var.scss', 'utf8', (err, data) => {
      if (err) throw err;

      let styles = data;
      Object.keys(theme).forEach(key => {
        const value = theme[key];
        const regexp = new RegExp(`(${key}:.*)#\\w+`, 'g');
        styles = styles.replace(regexp, `$1${value}`);
      });

      fs.writeFile(`./dist/${projectName}/styles/var.scss`, styles, err => {
        if (err) console.log('err:_____', err);
        console.log('输出了 var.scss');
      });
    });
  }

  // 拷贝单个文件
  function copyOneFile(shortPathOrFileName) {
    const _src = path.join(__dirname, 'components-lib');
    const _dest = path.join(__dirname, `dist/${projectName}`);
    const _from = `${_src}/${shortPathOrFileName}`;
    const _to = `${_dest}/${shortPathOrFileName}`;

    fs.access(_dest, fs.constants.F_OK, err => {
      if (err) {
        fs.mkdir(
          _dest,
          {
            recursive: true
          },
          () => {
            fs.copyFile(_from, _to, err => {
              if (err) {
                console.log('err:_____', err);
              }

              console.log(`输出了 ${shortPathOrFileName}`);
            });
          }
        );
      } else {
        fs.copyFile(_from, _to, err => {
          if (err) {
            console.log('err:_____', err);
          }

          console.log(`输出了 ${shortPathOrFileName}`);
        });
      }
    });
  }

  // 拷贝通用的文件 如：styles/、 utils/、 uni.scss
  function copyCommonDir(_path, ignore) {
    const from = `./components-lib/${_path}`;
    const to = `./dist/${projectName}/${_path}`;
    checkDirectory(
      from,
      to,
      (src, dest) => {
        const read = fs.createReadStream(src);
        const write = fs.createWriteStream(dest);
        read.pipe(write);

        console.log(`输出了 通用文件 ${dest}`);
      },
      ignore
    );
  }

  // 修改 pages.json 的配置, 并输出到项目
  function updatePageConfig() {
    fs.readFile('./components-lib/pages.json', 'utf8', (err, data) => {
      if (err) throw err;

      const _config = JSON.parse(data);
      // 全局风格配置
      _config.globalStyle.navigationBarBackgroundColor = theme['fm-color'];

      // 页面配置
      _config.pages = Object.values(config.pages);

      fs.writeFile(`./dist/${projectName}/pages.json`, JSON.stringify(_config), err => {
        console.log('输出了 pages.json');
      });
    });
  }

  // 拷贝静态资源文件（理应根据配置中组件是否需要引用 static 来决定是否拷贝）

  // 创建页面
  function createPages() {
    const start = '<!-- @fm template start -->';
    const end = '<!-- @fm template end -->';

    Object.keys(pages).forEach(page => {
      const from = `components-lib/pages/${page}`;
      const to = `dist/${projectName}/pages/${page}`;

      checkDirectory(from, to, (src, dest) => {
        const _components = pages[page].components.reduce((prev, current) => {
          return prev + `<${current.componentName} />\n`;
        }, '');

        fs.readFile(src, 'utf8', (err, data) => {
          const _data = replaceComment({
            start,
            end,
            content: data,
            replaceContent: _components
          });

          fs.writeFile(dest, _data, 'utf8', err => {
            if (err) console.log('err:_____', err);
          });
        });
      });
    });
  }

  function handleFile(src, dest, handler, ignore) {
    const url = path.join(__dirname, src);

    fs.stat(url, (err, stats) => {
      if (stats.isFile()) {
        return handler(url, dest, stats);
      }

      const paths = fs.readdirSync(url);

      paths.forEach(_path => {
        const _src = `${src}/${_path}`;
        const _dest = `${dest}/${_path}`;
        fs.stat(_src, (err, stats) => {
          const isDir = stats.isDirectory();

          if (isDir) {
            return checkDirectory(_src, _dest, handler);
          }

          if (_src.includes(ignore)) {
            return console.log('过滤了:  ', ignore);
          }

          handler(_src, _dest, stats);
        });
      });
    });
  }

  function checkDirectory(src, dest, handler, ignore) {
    fs.access(dest, fs.constants.F_OK, err => {
      if (err) {
        fs.mkdir(
          dest,
          {
            recursive: true
          },
          () => handleFile(src, dest, handler, ignore)
        );
      } else {
        handleFile(src, dest, handler, ignore);
      }
    });
  }
};

// 替换条件注释中的内容
function replaceComment({ start, end, content = '', replaceContent = '' }) {
  const reg = new RegExp(`(${start}[\\s\\S]*${end})`, 'igm');
  const newContent = content.replace(reg, replaceContent);
  return newContent;
}
