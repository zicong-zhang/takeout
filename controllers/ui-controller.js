// https://github.com/jprichardson/node-fs-extra
// https://www.colabug.com/3668248.html
// https://www.jianshu.com/p/d6990a03d610
import fse from 'fs-extra';
import path from 'path';

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

      await fse.writeFile(resolve(`ui/src/styles/var.scss`), styles);
    } catch (err) {
      console.log('err:_____', err);
    }
  }
}


module.exports = mpUiController;
