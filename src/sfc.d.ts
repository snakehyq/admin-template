/* eslint-disable */
// 声明.vue 模块
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 声明element-ui 的中文
declare module 'element-plus/dist/locale/zh-cn.mjs'
