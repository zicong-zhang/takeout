// https://github.com/jprichardson/node-fs-extra
// https://www.colabug.com/3668248.html
// https://www.jianshu.com/p/d6990a03d610
const fse = require('fs-extra');
const path = require('path');

const resolve = _path => path.join(__dirname, '../', _path)

const mpUiController = {
  async updateThemeColor({ request }) {
    const id = ctx.query.id;

    if (!id) throw new ctx.TriggerError('PARAM_ERROR');
    
    try {
      const readData = await fse.readFile(resolve('ui/src/styles/var.scss'), 'utf8')
      console.log('ctx.body:_____', request.body);

      const theme = {...request.body.styles};
      const { projectName } = request.body;
      let styles = readData;

      Object.keys(theme).forEach(key => {
        const value = theme[key];
        const reg = new RegExp(`(${key}:.*)#\\w+`, 'g');
        styles = styles.replace(reg, `$1${value}`);
      })

      // fse.writeFile(resolve(`dist/${projectName}/styles/var.scss`), styles);
      await fse.writeFile(resolve(`ui/src/styles/var.scss`), styles);
      console.log('222222:_____', styles);

      /* fs.readFile('../ui/styles/var.scss', 'utf8', (err, data) => {
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
      }); */
    } catch (err) {
      console.log('err:_____', err);
    }
  }
}


module.exports = mpUiController;
