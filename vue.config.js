const path = require('path')
const isPro = process.env.NODE_ENV === 'production'
const handleLessGlobalType = (rule) => {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/lessVariates.less')]
    })
}
module.exports = {
  outputDir: './build',
  assetsDir: 'assets',
  publicPath: isPro ? '/pro' : './',
  // 和webpack属性一致，如果configureWebpack是对象，将会最后会合并
  // 如果是函数,将通过config参数来覆盖config的配置
  // 第一种方式
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // },
  // 第二种方式
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

  // 通过chainWebpack方式配置
  chainWebpack: (config) => {
    // 通过style-resources-loader 来添加less全局变量
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) =>
      handleLessGlobalType(config.module.rule('less').oneOf(type))
    )
  }
}
