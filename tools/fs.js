const child = require('child_process');
const cpuCount = require('os').cpus();
const path = require('path');
const fs = require('fs');
const copy = require('./copy');

// 拷贝组件库的组件文件到 ui
const copyComponentsToUi = (src, dest) => {
  // return new Promise((resolve, reject) => {
  fs.createReadStream(src).pipe(fs.createWriteStream(dest));
  // })
};
// copyComponentsToUi('./components-lib/components', './ui/src/components')

// 拷贝组件库
// checkDirectory('./components-lib/components', , copy);
// 拷贝样式
// checkDirectory('./components-lib/styles', './ui/src/styles', copy);

/* copy(path.join(__dirname, 'components-lib/components'), path.join(__dirname, 'ui/src/components'), err => {
  if (err) console.log('err:_____', err);
  openChildProcess()
}) */

function checkDirectory(src, dest, cb) {
  fs.access(dest, fs.constants.F_OK, err => {
    if (err) {
      fs.mkdirSync(dest);
      cb(src, dest);
    } else {
      cb(src, dest);
    }
  });
}

function handleFile(src, dest) {
  const paths = fs.readdirSync(path.join(__dirname, src));
  // console.log('paths:_____', path.join(__dirname, src), paths);
  paths.forEach(_path => {
    const _src = `${src}/${_path}`;
    const _dest = `${dest}/${_path}`;

    fs.stat(_src, (err, stats) => {
      const isFile = stats.isFile();
      const isDir = stats.isDirectory();
      const isVueFile = isFile && /\.vue$/.test(_src);
      const isStyleFile = isFile && /\.(css|scss)$/.test(_src);
      const isImg = isFile && /\.(png|jpg|jpeg|gif|svg)/.test(_src);

      if (err) console.log('err2222222222:_____', err);

      if (isDir) checkDirectory(_src, _dest, handleFile);

      if (isImg) return handleFileImg({
        fileName: _path,
        src: _src,
        dest: _dest
      })
      
      if (isFile) {
        fs.readFile(_src, 'utf8', (err, file) => {
          let data = file;

          // .vue 文件 或 样式文件 的单位替换 upx 并且数值除 2
          if (isVueFile || isStyleFile) {
            data = handleFileVue(file);
          }

          fs.writeFile(_dest, data, 'utf8', err => {
            if (err) {
              console.log('err:_____', err);
            }
          });
        });
      }

      // console.log('isFile:_____', isFile, isDir, _src);
    });
  });
}

// 处理 vue 文件
function handleFileVue(file) {
  let data = '';

  data = file
    // upx => px， 单位减半
    .replace(/(\d+)upx/g, (text, group) => `${group / 2}px`)
    // 转换 image 标签 => img
    .replace(/<image\s/g, '<img ')
    .replace(/<\/image>/g, '')
    // require 的 img 图片路径转换
    .replace(/(require\(['"])(\.\.\/)+static(.*)/g, '$1@static$3')

  return data;
}

// 处理图片文件
function handleFileImg({ fileName, src, dest }) {
  const read = fs.createReadStream(src)
  const write = fs.createWriteStream(dest)
  read.pipe(write);
}


checkDirectory('components-lib/components', 'ui/src/components', handleFile)
checkDirectory('components-lib/styles', 'ui/src/styles', handleFile)
checkDirectory('components-lib/utils', 'ui/src/utils', handleFile)
checkDirectory('components-lib/static', 'ui/static', handleFile)

// 开启子进程
function openChildProcess() {
  // cpuCount.forEach(() => {
  //   child.fork('./workers');
  // })
  const uiProcess = child.exec(
    'start cmd /k "cd ui && npm run serve"',
    {
      maxBuffer: 9999999999
    },
    (err, stdout, stderr) => {
      if (err) console.log('err:_____', err);

      console.log('开启 ui 进程');
    }
  );

  // console.log('child-end:_____', uiProcess);
}

// openChildProcess();

// 替换条件注释中的内容
const replaceComment = (content = '', data = '') => {
  return new Promise((resolve, reject) => {
    try {
      const startStr = '<!-- ## replace start -->';
      const endStr = '<!-- ## replace end -->';
      const reg = new RegExp(`(${startStr}[\\s\\S]*${endStr})`, 'igm');
      const newContent = content.replace(reg, data);
      resolve(newContent);
      // throw new Error('我报错了');
    } catch (err) {
      reject('');
      console.log('err:_____1', err);
      throw err;
    }
  });
};

// 读取文件
const readFile = async _path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join('./public/index.vue'), 'utf8', async (err, data) => {
      if (err) {
        return console.log('err:_____2', err);
      }

      try {
        const content = await replaceComment(data, '5555');
        // console.log('content:_____', content);
        resolve(content);
      } catch (err) {
        console.log('err:___333__', err);
        reject('');
      }
    });
  });
};

module.exports = function() {
  /* readFile().then(content => {
    fs.writeFile('./prod/create.vue', content, 'utf8', err => {
      if (err) throw err;
    });
  }); */
};
