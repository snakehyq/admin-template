export interface IUserLogin {
  name: string
  password: string
}

interface IUserInfoRole {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

interface IUserInfoDepartment {
  id: number
  name: string
  parentId: null
  createAt: Date
  updateAt: Date
  leader: string
}

export interface IUserInfo {
  id: number
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: IUserInfoRole
  depatment: IUserInfoDepartment
}

export interface IUserType {
  id: number
  name: string
  token: string
}

export interface IPhone {
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
