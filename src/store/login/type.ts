import { IUserInfo } from '@/api/login/type'

export interface ILoginState {
  tokens: string
  userInfo: IUserInfo
  roleMenus: any
}
