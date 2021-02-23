const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/styles/index.scss";'
      }
    }
  }
}
