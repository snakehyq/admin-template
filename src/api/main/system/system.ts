import { baseHttpRequest } from '../..'
import { IDataType } from '../.././type'

// 用户登录
export function pageList(url: string, data: any) {
  return baseHttpRequest.request<IDataType>({
    method: 'POST',
    url,
    data
  })
}
