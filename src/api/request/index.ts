import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance } from 'axios'
import { IRequestInterceptors, IEXtendsAxiosRequestConfig } from './type'
import { httpRequestInterceptors } from './global'
const defaultShowLoading = true
class HttpRequest {
  instance: AxiosInstance
  interceptors?: IRequestInterceptors
  loading?: any
  showLoading: boolean
  constructor(config: IEXtendsAxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? defaultShowLoading
    // 每个请求对象的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局的拦截器
    httpRequestInterceptors(this)
  }
  request<T>(config: IEXtendsAxiosRequestConfig): Promise<T> {
    // 封装请求独有的拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    // 封装请求独有的加载图标
    if (config.showLoading === false) {
      this.showLoading = !defaultShowLoading
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>({
          ...config
        })
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            // 封装请求独有的隐藏加载小图标
            this.showLoading = defaultShowLoading
            res = config.interceptors?.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((error) => {
          if (config.interceptors?.responseInterceptorCatch) {
            // 封装请求独有的隐藏加载小图标
            this.showLoading = defaultShowLoading
            config.interceptors?.responseInterceptorCatch(error)
          }
          reject(error)
        })
    })
  }
  get<T>(config: IEXtendsAxiosRequestConfig): Promise<T> {
    return this.request({
      method: 'GET',
      ...config
    })
  }
  post<T>(config: IEXtendsAxiosRequestConfig): Promise<T> {
    return this.request({
      method: 'POST',
      ...config
    })
  }
  delete<T>(config: IEXtendsAxiosRequestConfig): Promise<T> {
    return this.request({
      method: 'DELETE',
      ...config
    })
  }
  patch<T>(config: IEXtendsAxiosRequestConfig): Promise<T> {
    return this.request({
      method: 'PATCH',
      ...config
    })
  }
}

export default HttpRequest
