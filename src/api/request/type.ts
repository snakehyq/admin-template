import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface IEXtendsAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: IRequestInterceptors
  showLoading?: boolean
}
