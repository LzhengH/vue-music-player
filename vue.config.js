const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

const addStyleResource = (rule) => {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // 需要全局导入的less,这个地方一点要写./src才行,否则会报错...
        path.resolve(__dirname, './src/assets/styles/variables.less'),
        path.resolve(__dirname, './src/assets/styles/mixin.less')
      ]
    })
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: config => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      src: resolve('src')
    })
  },
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }

}
