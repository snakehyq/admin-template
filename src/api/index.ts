// service统一出口
// 假设存在两个或以上的不同的请求（地址、拦截器等不同）
// 可以通过new 构造函数来增加扩展性
import HttpRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

export const baseHttpRequest = new HttpRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('对象才有的请求拦截器-成功')
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      console.log('对象才有用的响应拦截器-成功')
      return res
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  }
})
