import { baseHttpRequest } from '../'

// interface IGEtAppDetailRes {
//   data: any
//   code: number
//   message: string
// }

export function getAppDetail() {
  return baseHttpRequest.request({
    method: 'GET',
    url: '/api/biz/unsuccessful/dict/biz_type'
    // showLoading: false
    // interceptors: {
    //   requestInterceptor: (config) => {
    //     console.log('请求才有请求拦截器-成功')
    //     return config
    //   },
    //   requestInterceptorCatch: (error) => {
    //     return error
    //   },
    //   responseInterceptor: (res) => {
    //     console.log('请求才有的响应拦截器-成功')
    //     return res
    //   },
    //   responseInterceptorCatch: (error) => {
    //     return error
    //   }
    // }
  })
}
