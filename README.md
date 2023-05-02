# vue3-ts-admin

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目搭建

### 使用脚手架初始化项目

```js
vue createe vue3-ts-admin
```

![image-20221118151819536](./readIma/image-20221118151819536.png)

之后手动配置 router、vuex

![image-20221118152431457](./readIma/image-20221118152431457.png)

初始化目录结构

![image-20221118152739806](./readIma/image-20221118152739806.png)

### 项目规范

#### 1、集成 editorcinfig 配置

editorConfig 有助于为不同的 IDE 编辑器（vscode、webstorm 等）上处理同一个项目的多个开发人员维护一致的编码风格。在 根目录下创建.editorconfig

```json
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为utf-8
indext_style = space #缩进风格（他把| space）
index_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型（lf | cr | trlf）
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾 添加新行

[*.md] # 表示仅 md 文件适用一下规则
max_line_length = off
trim_trailing_whitespace = false

```

#### 2、在 vscode 中安装插件 EditorConfig for VS Code

![image-20221118155635668](./readIma/image-20221118155635668.png)

#### 3、使用 prettier 工具

prettirer 是一款强大的代码格式化工具，支持 js、ts、css、scss、lesss、jsx、angular、vue 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

1. 安装 prettier

 `npm install prettier -D`

2. 配置.prettierrc 文件

   - useTabs: 使用 tab 缩进还是空格缩进，选择 false;
   - tabWidthL: tab 是空格的情况下，是几个空格，选择 2 个；
   - printWidth: 当行字符的长度，推荐 80，也有人喜欢 100 或者 120；
   - singleQuote: 使用单引号还是双引号，选择 true，使用单引号；
   - trailingComma: 在多行输入的尾逗号是否 添加，设置为 none;
   - semi: 语句未尾是否要加分号，默认值是 true,选择 false 表示不添加；

   ```js
   {
     "useTabs": false,
     "tabWidth": 2,
     "printWidth": 80,
     "singleQuote": true,
     "trailingComma": "none",
     "semi": false
   }
   ```

3. 配置.prettierignore，某些文件不需要 prettier 代码格式文件，则可以配置到这个文件中

   ```js
   /dist/*
   .local
   .output.js
   /node_modules/**

   **/*.svg
   **/*.sh

   /public/*

   ```

4. 配置.eslintignore 忽略不需要 eslint 检查的文件

   ```js
   node_modules
   /src/node_modules
   dist/
   test
   build/
   /src/components
   /src/wxcomponents
   /src/unpackage
   uni.scss
   /src/node_modules
   /src/api/MockModel.js
   /src/config.js
   /src/config.js
   /src/static/
   /src/common/
   /src/lib/
   /src/network
   *.md
   *.json
   *.ttf
   *.scss
   *.png
   *.jpg
   *.html
   .hbuilderx
   pages.json
   src/components/u-charts/u-charts.js
   /src/utils/utils/js
   /output.js  // 忽略通过命令行 vue inspect>output.js
   ```

5. vscode 需要安装 prettier 的插件![image-20221118164216521](./readIma/image-20221118164216521.png)

6. 测试 prettier 是否生效

   - 测试一：在代码中保存代码

   - 测试二：配置一次性修改的命令 package.json,配置有个 scripts,一次性格式化代码

     ```js
     "prettier": "prettier --write ."
     ```

#### 4、使用 eslint 检查

1. vscode 安装 eslint![image-20221118170004184](./readIma/image-20221118170004184.png)

2. 解决 eslint 和 prettier 冲突的问题：

   安装插件：（在 vue 创建项目时候，如果选择 prettier,那么这两个插件会自动安装）

   ```js
   npm i eslint-plugin-prettier eslint-config-prettier -D
   ```

   添加 prettier 插件：在.eslintrc.js 中添加

   ```js
   extends: [
       'plugin:vue/vue3-essential',
       'eslint:recommended',
       '@vue/typescript/recommended',
       '@vue/prettier',
       '@vue/prettier/@typescript-eslint',
       'plugin:prettier/recommended'
     ],
   
   module.exports = {
     root: true,
     env: {
       node: true
     },
     extends: [
       'plugin:vue/vue3-essential',
       'eslint:recommended',
       '@vue/typescript/recommended',
       '@vue/prettier',
       '@vue/prettier/@typescript-eslint',
       'plugin:prettier/recommended'
     ],
     parserOptions: {
       ecmaVersion: 2020
     },
     rules: {
       'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
       'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
     }
   }
   ```

   #### 在 vscode 进行配置，否则保存代码不会根据规则调整代码 （在 vscode 的 setting.json 中添加）
    > 掘金大佬的规则讲解，地址 https://juejin.cn/post/7156893291726782500
   ```js
      
     "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.requireConfig": true,
    "eslint.enable": true,
    "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   ```

#### 5、git Husky 和 eslint

虽然 我们已经要求项目使用 eslint 了，但是不能保证组员 提交代码之前都将 eslint 中的问题解决掉了。

- 也就是我们希望保证代码仓库中的代码也是要符合 eslint 规范的。
- 那梦我们需要在组员执行 git commit 命令的时候对其进行校验, 如果不符合 eslint 规范，那么自动通过规范进行修复。

那么如何做到这一点呢？可以通过 husky 工具

- husky 是一个 git hook 工具，可以 帮助我们触发 git 提交的各个阶段：pre-commit,commit-msg,pre-push

如何使用 husky 呢？

这里我们可以使用自动配置命令：

```js
npx husky-init
npm install husky -D
```

这里会做三件事：

1.安装 husky 相关的依赖：

![image-20221118204119448](.\readIma\image-20221118204119448.png)

2.项目目录下创建.husky 文件夹：

![image-20221118204145337](.\readIma\image-20221118204145337.png)

3.在 package.json 中添加一个脚本

![image-20221118204208137](.\readIma\image-20221118204208137.png)

 接下来，我们需要去完成一个操作，在运行 commit 时候，执行 lint 脚本。

![image-20221118204313104](.\readIma\image-20221118204313104.png)

![image-20221118204333281](.\readIma\image-20221118204333281.png)

#### 6、git commit 规范

 通常我们的 git commit 会按照统一的风格来提交，这样可以快速定位提交的内容，方便之后对版本进行控制。但是如果每次手动来编写这些是比较麻烦的事情，我们可以使用一个 工具：commitizen

- commitizen 是一个帮助我们去规范 commit message 的工具：

  1. 安装 commitizen

     ```js
     npm install commitizen -D
     ```

  2. 安装 cz-conventional-changelog，并且初始化 cz-conventional-changelog

     ```js
     npx commitizen init cz-conventional-changelog --save-dev --save-exact
     ```

  3. 这个命令会帮助我们安装 cz-conventional-changelog

     ![image-20221119160946916](./readIma/image-20221119160946916.png)

  4. 并且在 package.json 中进行配置：

     ![image-20221119161048120](./readIma/image-20221119161048120.png)

  5. 在 package.json 中配置 commit 命令，执行 git cz

     ![image-20221119161456431](.\readIma\image-20221119161456431.png)

     - 第一步是选择 type,本次更新的类型

       ![image-20221119141001179](./readIma/image-20221119141001179.png)

  - 第二部是选择本次修改的范围（作用域）

  - 第三步选择提交的信息

  - 第四步输入更详细的信息，可以 跳过

  - 第五步是否是一次大更新？

  - 第六步这次改变是否影响到某个 open issue

  - ![image-20221119162615600](.\readIma\image-20221119162615600.png)

- 如果我们按照 cz 来规范了提交风格，但是依然有同事通过 git commit 按照不规范的格式提交后怎么办？

  - 我们可以通过 commitlint 来限制提交：

  - 安装 @commitlint/cli @commitlint/config-conventional

    ```js
    npm i @commitlint/cli @commitlint/config-conventional -D
    ```

  - 在根目录创建 commitlint.config.js 文件，配置 commitlint

    ```js
    module.exports = {
      extends: ['@commitlint/config-conventional']
    }
    ```

  - 使用 huskys 生成 commit-msg 文件，验证提交信息：

    ```js
    npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 该命令 不行直接
    npx husky add .husky/commit-msg 然后在文件里面添加npx --no-install commitlint --edit "$1"
    ```

    ![image-20221119165539090](./readIma/image-20221119165539090.png)

  - 这个时候提交的话就会报错了

    ![image-20221119170013560](.\readIma\image-20221119170013560.png)

### 8、vue-cl 不经过 webpack 打包的静态资源

#### assets 文件下 (src/assets/) 通过相对路径被引入，这类引用会被 webpack 处理

比如：![img](./readIma\1647519-20191223101547490-1319489986.png)

会被编译成：![img](./readIma\1647519-20191223101705145-1272771031.png)

#### public 文件夹

放到 public 目录下的资源会被直接复制，不会经过 webpack 的打包处理。但是要注意的是：public 中的空文件夹资源是不会被复制的。即使使用 copy-webpack-plugin 也是不会被 copy 的。

所以如果要引用的资源不希望被 webpack 处理时，可以将其放到 public 文件夹下，在 index.html 内引用资源文件且不希望被 webpack 处理时，可以加上前缀

```js
<%= BASE_URL %>
```

![img](./readIma\1647519-20191223102459099-1427159381.png)

### 9、 vue.config.js 配置

#### 1 导出对象

这个文件导出了一个包含了选项的对象：

```js
module.exports = {
  // 选项...
}
复制代码
```

接下来，详细介绍一些选项及配置：

#### 2 基本配置

```js
module.exports = {
    productionSourceMap: false,
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',
    devServer: {
        port: 8090,
        host: '0.0.0.0',
        https: false,
        open: true
    },
    // 其他配置
    ...
复制代码
```

- **productionSourceMap**：生产环境是否要生成 `sourceMap`

- **publicPath**：部署应用包时的基本 URL,用法和 `webpack` 本身的 `output.publicPath` 一致

  - 可以通过三元运算去配置`dev`和`prod`环境, `publicPath: process.env.NODE_ENV === 'production' ? '/prod/' : './'`
  - ![image-20221123100119396](./readIma\image-20221123100119396.png)
  - 运行**npm run build**，index.html 中引入的各个文件就会有/pro
  - ![image-20221123100359314](./readIma\image-20221123100359314.png)

- **outputDir**: `build` 时输出的文件目录

- **assetsDir**: 放置静态文件夹目录

  - 设置放置打包生成的静态资源 (js、css、img、fonts) 的目录。注意： 该目录是相对于 `outputDir`
  - ![image-20221123100627302](./readIma\image-20221123100627302.png)
  - 运行**npm run build**命令，在输出的文件中，静态文件都会放到 assets 目录下,这里把 public 下的 readlma 文件下的图片打包进来了，我们是不需要这些图片的，要移动到根目录下，/readlma
  - ![image-20221123102657569](./readIma\image-20221123102657569.png)

- **devServer**: dev 环境下，`webpack-dev-server` 相关配置

  - **port**: 开发运行时的端口

  - **host**: 开发运行时域名，设置成`'0.0.0.0'`,在同一个局域网下，如果你的项目在运行，同时可以通过你的`http://ip:port/...访问你的项目`

  - **https**: 是否启用 `https`

  - **open**: `npm run serve` 时是否直接打开浏览器

#### 3 插件及规则的配置

在`vue.config.js`如果要`新增/修改` `webpack` 的 `plugins` 或者 `rules` , 有 2 种方式。

##### `configureWebpack` 方式

configureWebpack 是相对比较简单的一种方式

- 它可以是一个`对象`：和 `webpack` 本身配置方式是一致，该对象将会被 `webpack-merge` 合并入最终的 `webpack` 配置

- 它也可以是一个`函数`：直接在函数内部进行修改配置,将覆盖 webpack 里面的配置

  ```js
  configureWebpack: {
      rules:[],
      plugins: []
    }
  configureWebpack: (config) => {
      // 例如，通过判断运行环境，设置mode
      config.mode = 'production'
  }
  复制代码
  ```

##### `chainWebpack` 方式

chainWebpack 链式操作 (高级)，接下来所有的配置我都会在该选项中进行配置

#### 4 规则 rules 的配置

关于`rules` 的配置，我会分别从新增/修改进行介绍。

##### 1.rules 的新增

在`webpack`中 `rules` 是 `module` 的配置项，而所有的配置的都是挂载到 `config` 下的，所以新增一个 rule 方式：

```js
config.module.rule(name).use(name).loader(loader).options(options)
复制代码
```

##### 案例：`style-resources-loader` 来添加`less`全局变量

```js
npm install style-resources-loader -D
```

##### 案例：`svg-sprite-loader` 将 svg 图片以雪碧图的方式在项目中加载

```js
module.exports = {
  chainWebpack: (config) => {
    // 通过 style-resources-loader 来添加less全局变量
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) => {
      let rule = config.module.rule('less').oneOf(type)
      rule
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [path.resolve(__dirname, './lessVariates.less')]
        })
    })

    // `svg-sprite-loader`: 将svg图片以雪碧图的方式在项目中加载
    config.module
      .rule('svg')
      .test(/.svg$/) // 匹配svg文件
      .include.add(resolve('src/svg')) // 主要匹配src/svg
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader') // 使用的loader，主要要npm该插件
      .options({ symbolId: 'svg-[name]' }) // 参数配置
  }
}
复制代码
```

##### 2 rules 的修改

针对已经存在的 `rule` , 如果需要修改它的参数, 可以使用 `tap` 方法：

```js
config.module
  .rule(name)
  .use(name)
  .tap((options) => newOptions)

复制代码
```

##### 案例：修改`url-loader`的参数

```js
module.exports = {
  chainWebpack: (config) => {
    // `url-loader`是webpack默认已经配置的，现在我们来修改它的参数
    config.module
      .rule('images')
      .use('url-loader')
      .tap((options) => ({
        name: './assets/images/[name].[ext]',
        quality: 85,
        limit: 0,
        esModule: false
      }))
  }
}
复制代码
```

#### 插件 plugins 的配置

关于 `plugins` 的配置，我会分别从`新增/修改/删除`进行介绍。

##### 1.plugins 的新增

- 注意：这里 WebpackPlugin 不需要通过`new WebpackPlugin()`使用。

  ```js
  config.plugin(name).use(WebpackPlugin, args)
  复制代码
  ```

  ##### 案例：新增`hot-hash-webpack-plugin`

  ```js
  const HotHashWebpackPlugin = require('hot-hash-webpack-plugin')
  module.exports = {
    chainWebpack: (config) => {
      // 新增一个`hot-hash-webpack-plugin`
      // 注意：这里use的时候不需要使用`new HotHashWebpackPlugin()`
      config.plugin('hotHash').use(HotHashWebpackPlugin, [{ version: '1.0.0' }])
    }
  }
  复制代码
  ```

##### 2 plugins 的修改

同理, `plugin` 参数的修改也是通过 `tap` 去修改。

```js
config.plugin(name).tap((args) => newArgs)
复制代码
```

##### 案例：修改打包后`css`抽离后的`filename`及抽离所属目录

##### 案例：删除`console`和`debugger`

```js
const HotHashWebpackPlugin = require('hot-hash-webpack-plugin')
module.exports = {
  chainWebpack: (config) => {
    // 修改打包时css抽离后的filename及抽离所属目录
    config.plugin('extract-css').tap((args) => [
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ])

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
  }
}
复制代码
```

##### 3 plugins 的删除

对于一些`webpack`默认的 `plugin` ，如果不需要可以进行删除

```js
config.plugins.delete(name)
复制代码
```

##### 案例：删除 `vue-cli3.X` 模块的自动分割抽离

```js
module.exports = {
  chainWebpack: (config) => {
    // vue-cli3.X 会自动进行模块分割抽离，如果不需要进行分割,可以手动删除
    config.optimization.delete('splitChunks')
  }
}

复制代码
```

### 一些常见的配置

##### 1、修改 enter 文件

webpack`默认的`entry`入口是`scr/main.ts

```js
config.entryPoints.clear() // 清空默认入口
config.entry('test').add(getPath('./test/main.ts')) // 重新设置
复制代码
```

##### 2、DefinePlugin

定义全局全局变量，`DefinePlugin` 是 `webpack` 已经默认配置的，我们可以对参数进行修改

```js
config.plugin('define').tap((args) => [
  {
    ...args,
    'window.isDefine': JSON.stringify(true)
  }
])
复制代码
```

##### 3| 自定义 filename 及 chunkFilename

自定义打包后 js 文件的路径及文件名字

```js
config.output.filename('./js/[name].[chunkhash:8].js')
config.output.chunkFilename('./js/[name].[chunkhash:8].js')
复制代码
```

##### 4、修改 html-webpack-plugin 参数

`html-webpack-plugin` 是 `webpack` 已经默认配置的，默认的源模版文件是 `public/index.html` ;我们可以对其参数进行修改

```js
 config.plugin('html')
        .tap(options => [{
            template: '../../index.html' // 修改源模版文件
            title: 'test',
        }]);
复制代码
```

##### 5、设置别名 alias

`webpack`默认是将`src`的别名设置为`@`, 此外，我们可以进行添加

```js
config.resolve.alias
  .set('@', resolve('src'))
  .set('api', resolve('src/apis'))
  .set('common', resolve('src/common'))
复制代码
```

### 附上一份我的 vue.config.js 的配置

```js
const path = require('path')
const HotHashWebpackPlugin = require('hot-hash-webpack-plugin')
const WebpackBar = require('webpackbar')
const resolve = (dir) => path.join(__dirname, '.', dir)

module.exports = {
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    port: 9999,
    host: '0.0.0.0',
    https: false,
    open: true
  },

  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) => {
      let rule = config.module.rule('less').oneOf(type)
      rule
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [path.resolve(__dirname, './lessVariates.less')]
        })
    })

    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/apis'))
      .set('common', resolve('src/common'))

    config.module
      .rule('images')
      .use('url-loader')
      .tap((options) => ({
        name: './assets/images/[name].[ext]',
        quality: 85,
        limit: 0,
        esModule: false
      }))

    config.module
      .rule('svg')
      .test(/.svg$/)
      .include.add(resolve('src/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')

    config.plugin('define').tap((args) => [
      {
        ...args,
        'window.isDefine': JSON.stringify(true)
      }
    ])

    // 生产环境配置
    if (process.env.NODE_ENV === 'production') {
      config.output.filename('./js/[name].[chunkhash:8].js')
      config.output.chunkFilename('./js/[name].[chunkhash:8].js')
      config.plugin('extract-css').tap((args) => [
        {
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css'
        }
      ])
      config.plugin('hotHash').use(HotHashWebpackPlugin, [{ version: '1.0.0' }])
      config.plugin('webpackBar').use(WebpackBar)

      config.optimization
        .minimize(true)
        .minimizer('terser')
        .tap((args) => {
          let { terserOptions } = args[0]
          terserOptions.compress.drop_console = true
          terserOptions.compress.drop_debugger = true
          return args
        })
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
          vendor: {
            name: 'chunk-libs',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 10
          }
        }
      })
    }
  }
}
```

##### 说明 vue.config.js 里配置

##### 1、webpackBar 打包进度条插件

- npm install webpackbar -D
- const WebpackBar = require('webpackbar')// 在打包的时候可以看到打包进度，可以了解一些警告和报错
- config.plugin('webpackBar').use(WebpackBar) // 开发环境下--配置 webpackBar 打包进度条插件

![image-20221124163637339](C:\Users\ZM\AppData\Roaming\Typora\typora-user-images\image-20221124163637339.png)

##### 2、 outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录

##### 3、configureWebpack 默认配置如下所示

```js
module.exports = {
  configureWebpack: (config) => {
    return {
      optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 6,
          maxInitialRequests: 4,
          automaticNameDelimiter: '~',
          cacheGroups: {
            vendors: {
              name: `chunk-vendors`,
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              chunks: 'initial'
            },
            common: {
              name: `chunk-common`,
              minChunks: 2,
              priority: -20,
              chunks: 'initial',
              reuseExistingChunk: true
            }
          }
        }
      }
    }
  }
}
```

##### 4、webpack-bundle-analyzer 可以可视化分析打包后的文件

- 安装

  ```js
  npm install webpack-bundle-analyzer --save-dev
  ```

- 在 vue.config.js 中引入插件

  ```js
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  chainWebpack: (config) => {
      // 生产环境的配置
      if (process.env.NODE_ENV === 'production') {
          config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
      }
  })
  ```

##### splitChunks

- 详解 https://blog.csdn.net/ZYS10000/article/details/113144217
- 运行**npm run build**

![image-20221125153859852](.\readIma\image-20221125153859852.png)

这个发现 chunk-vendors.js 的大小有点大了，有 3.xxMB，还是项目初始化时需要加载的 js 文件，大小过大会导致首屏加载时间过长。

**解决**：用 SplitChunks 优化，例如把 element 从 chunk-vendors.js 提取出来，要在 cacheGroups 中配置：

```js
  element: {
            name: 'element-plus',
            chunks: 'all',
            test: /[\\/]element-plus[\\/]/,
            priority: 11
          }
```

注意 priority 选项，要把 element 单独提取出来，**priority 的值必须比 vendors 方案中的 priority 的值大**，不然提取不出来。

![image-20221125154704992](.\readIma\image-20221125154704992.png)

这个时候就可以看到 element-plus 被抽离出来了，

![image-20221125154742622](.\readIma\image-20221125154742622.png)

发现 chunk-vendors.js 由 3.xxMB 变成了 2MB 了，此外自己可以提取第三方插件。xlsx、moment、jquery 等第三方依赖。

##### 5、productionSourceMap // 生产环境的 source map,

- false，打包后的不生成.map 文件
- true，打包后生成.map 文件

##### 6、parallel

- 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
- parallel: require("os").**cpus**().length > 1







### 难点

描述：跨组件插槽如何使用 ？有a、b、c三个组件，a是爷爷组件，b是父组件，c是孙子组件，把a的组件的插槽放入到c组件中使用，应该如何解决？

解决：a中使用插槽内容，b中使用slot作用域插槽接受a中的插槽内容，同时使用作为b中的插槽内容，然后在c中使用slot作用域操作接受b中的插槽内容

a组件中使用b组件：

```js
<page-content
        ref="pageContentRef"
        v-bind="contentConfig"
        page-name="/user"
      >
            // 插槽内容
        <template #enable="scoped">
          {{ scoped.row.enable ? '启用' : '禁用' }}
        </template>
        <template #action>
          <el-button type="primary" plain text>编辑</el-button>
          <el-button type="danger" plain text>删除</el-button>
        </template>
      </page-content>
```

b组件接受a组件的内容，同时使用c组件

```js
 <page-table
      :title="title"
      :showIndexColumn="showIndexColumn"
      :showSelectColumn="showSelectColumn"
      :dataSourse="dataSourse"
      :propList="propList"
      :page-total="pageTotal"
      v-model:page="pageLoad"
    >
		// 使用template 作为插槽内容，将放入到c中的slot作用域插槽
      <template
        v-for="item in propSlots"
        :key="item.prop + 'slot-name'"
        #[item.slotName]="scoped"
      >
            // slot作用域插槽接受好a组件的内容
        <slot :name="item.slotName" :row="scoped.row"></slot>
      </template>
    </page-table>
```

c组件接受b组件的插槽内容

```js
<el-table :data="dataSourse" @selection-change="handeleSelectionChange">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
            //使用slot接受b组件传过来的内容
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
```

