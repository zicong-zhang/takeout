const path = require('path');


const resolve = _path => path.resolve(__dirname, _path);

// 引入全局 scss 变量
function importGlobalScss(config) {
  const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
  types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

  function addStyleResource (rule) {
    const varPath = path.resolve(__dirname, 'src/styles/var.scss');
    const mixinPath = path.resolve(__dirname, 'src/styles/mixins.scss');
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          varPath,
          mixinPath,
        ],
      })
  }
}

// 设置别名
function setAlias(config) {
  config.resolve.alias
    .set('@static', resolve('static'))
}

module.exports = {
  devServer: {
    hot: true,
    open: true,
    disableHostCheck: true,
  },
  chainWebpack: config => {
    importGlobalScss(config);
    setAlias(config);
  },
}
