import { ElLoading } from 'element-plus'
export function httpRequestInterceptors(httpRequeest: any) {
  httpRequeest.instance.interceptors.request.use(
    (config) => {
      console.log('全局的请求拦截器-成功')
      const token = ''
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bear ${token}`
        }
      }
      // 加载图标
      if (httpRequeest.showLoading) {
        httpRequeest.loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
      return config
    },
    (error) => {
      console.log('全局请求拦截器-失败')
      return error
    }
  )
  httpRequeest.instance.interceptors.response.use(
    (response) => {
      console.log('全局响应拦截器- 成功')
      // 隐藏加载小图标
      httpRequeest.loading.close()
      return response.data
    },
    (error) => {
      console.log('全局响应拦截器- 失败')
      return error
    }
  )
}
