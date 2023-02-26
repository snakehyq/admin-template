const path = require('path')
// 在打包的时候可以看到打包进度，可以了解一些警告和报错
const WebpackBar = require('webpackbar')
// 是否是开发环境
const IS_PRODUCTION = ['production', 'prod'].includes(process.env.NODE_ENV) //判断是否是生产环境
// 打包分析工具webpack-bundle-analyze
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const OS = require('os')
const resolve = (dir) => path.resolve(__dirname, dir)
const handleLessGlobalType = (rule) => {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [resolve('./src/lessVariates.less')]
    })
}
module.exports = {
  outputDir: './build', // 'build', 生产环境构建文件的目录
  assetsDir: 'assets',
  // publicPath: IS_PRODUCTION ? '/pro' : './',
  publicPath: './',
  // 生产环境的 source map,
  productionSourceMap: !IS_PRODUCTION,
  parallel: OS.cpus().length > 1,
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

    // 定义全局变量
    // config.plugin('define').tap((args) => [
    //   {
    //     ...args,
    //     'window.isDefine': JSON.stringify(true)
    //   }
    // ])
    // 生产环境的配置
    if (process.env.NODE_ENV === 'production') {
      // 修改打包时css抽离后的filename及抽离所属目录
      config.plugin('extract-css').tap((args) => [
        {
          filename: './assets/css/[name].[contenthash:8].css',
          chunkFilename: './assets/css/[name].[contenthash:8].css'
        }
      ])

      // 配置打包输出的js文件
      config.output.filename('./assets/js/[name].[chunkhash:8].js')
      config.output.chunkFilename('./assets/js/[name].[chunkhash:8].js')
      // 正式环境下，删除console和debugger
      config.optimization
        .minimize(true)
        .minimizer('terser')
        .tap((args) => {
          let { terserOptions } = args[0]
          terserOptions.compress.drop_console = true
          terserOptions.compress.drop_debugger = true
          return args
        })

      // 开发环境下--配置webpackBar打包进度条插件
      config.plugin('webpackBar').use(WebpackBar)
      // 配置打包分析工具webpack-bundle-analyzer 插件
      config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)

      // splitChunks
      config.optimization.splitChunks({
        cacheGroups: {
          common: {
            name: 'common',
            chunks: 'all',
            minSize: 1,
            minChunks: 2,
            priority: 1,
            // 为true时，如果当前要提取的模块，在已经在打包生成的js文件中存在，则将重用该模块，而不是把当前要提取的模块打包生成新的 js 文件。
            reuseExistingChunk: true
          },
          vendors: {
            name: 'chunk-vendors',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 10
          },
          element: {
            name: 'element-plus',
            chunks: 'all',
            test: /[\\/]element-plus[\\/]/,
            priority: 11
          }
        }
      })
    }
  },
  devServer: {
    disableHostCheck: true,
    https: false,
    proxy: {
      '/api': {
        target: 'https://mock.apifox.cn/m1/1892446-0-default',
        changeOrigin: true,
        secure: false
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }
}
