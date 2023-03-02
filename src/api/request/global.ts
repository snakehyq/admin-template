import { ElLoading } from 'element-plus'
import {
  handleRequestHeader,
  handleAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError
} from './tools'
export function httpRequestInterceptors(httpRequeest: any) {
  httpRequeest.instance.interceptors.request.use(
    (config) => {
      console.log('全局的请求拦截器-成功', config)
      // 处理请求头
      config = handleRequestHeader(config)
      // 处理token
      config = handleAuth(config)
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
      console.log('全局响应拦截器- 成功', response)
      // 隐藏加载小图标
      httpRequeest.loading.close()
      if (response.status !== 200) {
        handleAuthError(response.data.errno) &&
          handleGeneralError(response.data.errno, response.data.errmsg)
        return Promise.reject(response.data)
      }
      return response.data
    },
    (error) => {
      console.log('全局响应拦截器- 失败')
      handleNetworkError(error.response.status)
      return error
    }
  )
}
