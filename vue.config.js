const path = require('path')
module.exports = {
  outputDir: './build',
  // 和webpack属性一致，如果configureWebpack是对象，将会最后会合并
  // 如果是函数,将通过config参数来覆盖config的配置
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
  //   configureWebpack: (config) => {
  //       config.resolve.alias = {
  //           '@': path.resolve(__dirname, 'src'),
  //           'components': '@/components'
  //       }
  //   },
  // 第三种方式
  //   chainWebpack: (config) => {
  //     config.resolve.alias
  //       .set('@', path.resolve(__dirname, 'src'))
  //       .set('components', '@/components')
  //   }
}
