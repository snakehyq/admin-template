import { baseHttpRequest } from '../'
import { IUserInfo, IUserLogin, IUserType } from './type'
import { IDataType } from '../type'

// 用户登录
export function login(data: IUserLogin) {
  return baseHttpRequest.request<IDataType<IUserType>>({
    method: 'POST',
    url: '/manageSystem/login',
    data
  })
}

// 查询某个用户
export function queryUser(params) {
  return baseHttpRequest.request<IDataType<IUserInfo>>({
    method: 'GET',
    url: '/query/user',
    params,
    showLoading: false
  })
}

// 查询角色id查询菜单
export function roleMenusById(params) {
  return baseHttpRequest.request<IDataType>({
    method: 'GET',
    url: '/role/menus',
    params,
    showLoading: false
  })
}
