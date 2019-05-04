/*
 * @Description: 将 Uni 中开发的组件库拷贝到可视化
 * @Author: 广发前端 老沙
 * @Date: 2019-05-02 20:00:16
 */


import fs from 'fs-extra';
import alias from '@alias';
 
// 复制图片资源
const copyFiles = async (src, dest) => {
  try {
    await fs.copy(src, dest);
    console.log('copy finish -->', dest);
  } catch (err) {
    throw err;
  }
}

// 遍历指定目录的所有文件
const eachFile = async (src, cb, _relativePath = '') => {
  if (!cb || typeof cb !== 'function') {
    return console.error(
      'callback is required, and it has to be a function.'
    );
  }
  
  const dir = await fs.readdir(src);

  dir.forEach(async _path => {
    const _src = `${src}/${_path}`;
    const _dir = `${_relativePath}/${_path}`;
    const stats = await fs.stat(_src);
    const isDir = stats.isDirectory();

    if (isDir) return eachFile(_src, cb, _dir);

    cb({
      src: _src,
      dir: _relativePath,
      stats,
      relativePath: `${_relativePath}/${_path}`
    });
  })
}

// 复制 uni 的 components 文件夹
const copyComponents = (src, dest) => {
  eachFile(src, ({ src, relativePath, dir }) => {
    const _dest = dest + relativePath;

    // .vue
    if (/\.vue$/.test(src)) {
      return handleVueFile(src, _dest, dir);
    }
    
    // other
    copyFiles(src, _dest);
  });
}

// 处理 .vue
const handleVueFile = async (src, dest, dir) => {
  try {
    let data = await fs.readFile(src, 'utf8');
    data = data
      // upx => px， 单位减半
      .replace(/(\d+)upx/g, (text, group) => `${group / 2}px`)
      // 转换 image 标签 => img
      .replace(/<image\s/g, '<img ')
      .replace(/<\/image>/g, '')
      // require 的 img 图片路径转换
      .replace(/(require\(['"])(\.\.\/)+static(.*)/g, '$1@static$3')

    await fs.ensureFile(dest);
    console.log('_____',  dest);
    
    fs.writeFile(dest, data, 'utf8');
  } catch (err) {
    throw err;   
  }
}

// 复制 uni 的 styles
const copyStyles = async (src, dest) => {
  eachFile(src, ({ src, relativePath }) => {
    if (/\.(css|scss)$/.test(src)) {
      handleStyleFile(src, relativePath, dest);
    }
  })
}

// 处理 styles
const handleStyleFile = async (src, relative, dest) => {
  try {
    let data = await fs.readFile(src, 'utf8');
    // upx => px， 单位减半
    data = data.replace(/(\d+)upx/g, (text, group) => `${group / 2}px`);

    fs.writeFile(`${dest}${relative}`, data, 'utf8');
  } catch (err) {
    
  }
}



export default () => {
  const static = {
    from: alias('@uni/static'),
    to: alias('@visual/src/static')
  }
  const utils = {
    from: alias('@uni/utils'),
    to: alias('@visual/src/utils')
  }
  const components = {
    from: alias('@uni/components'),
    to: alias('@visual/src/components')
  }
  const styles = {
    from: alias('@uni/styles'),
    to: alias('@visual/src/styles')
  }
  
  copyFiles(static.from, static.to);
  copyFiles(utils.from, utils.to);
  copyComponents(components.from, components.to);
  copyStyles(styles.from, styles.to)

}
