import { Module } from 'vuex'

import { ILoginState } from './type.ts'
import { IRoutState } from '../type.ts'

const loginModule: Module<ILoginState, IRoutState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, account: any) {
      console.log('chulai')
    }
  }
}

export default loginModule
