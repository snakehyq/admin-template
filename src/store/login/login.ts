import { Module } from 'vuex'

import { ILoginState } from './type'
import { IRoutState } from '../type'
import { login, queryUser, roleMenusById } from '@/api/login/login'
import { IUserInfo, IUserLogin } from '@/api/login/type'
import storage from '@/utls/storage'
import router from '@/router'

const loginModule: Module<ILoginState, IRoutState> = {
  namespaced: true,
  state() {
    return {
      tokens: storage.getStorage('tokens') || '',
      userInfo: storage.getStorage('userInfo') || null,
      roleMenus: storage.getStorage('roleMenus') || null
    }
  },
  getters: {},
  mutations: {
    setTokens(state, token: string) {
      state.tokens = token
      storage.setStorage('tokens', token)
      // 设置token的时间
      storage.setStorage('token-time', new Date().getTime())
    },
    setUserInfo(state, userInfo: IUserInfo) {
      state.userInfo = userInfo
      storage.setStorage('userInfo', userInfo)
    },
    setRoleMenus(state, roleMenus: any) {
      state.userInfo = roleMenus
      storage.setStorage('roleMenus', roleMenus)
    }
  },
  actions: {
    async accountLoginAction({ commit }, account: IUserLogin) {
      const data = await login(account)
      if (data.code == 0) {
        // 把token存入进去
        commit('setTokens', data.data.token)
        // 查询用户是否存在
        const res = await queryUser({
          id: data.data.id
        })
        if (res.code == 0) {
          commit('setUserInfo', res.data)
          // 请求用户菜单
          const data = await roleMenusById({ id: res.data.role.id })
          if (data.code == 0) {
            commit('setRoleMenus', data.data)
            router.replace('/')
          }
        }
      }
    }
  }
}

export default loginModule
