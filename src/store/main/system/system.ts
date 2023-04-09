import { Module } from 'vuex'
import { IRoutState } from '@/store/type'
import { ISystemStore } from './type'
import { pageList } from '@/api/main/system/system'

const systemModule: Module<ISystemStore, IRoutState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, data) {
      state.userList = data
    },
    changeUserAccount(state, data) {
      state.userCount = data
    }
  },
  actions: {
    async getPageList({ commit }, payLoad: any) {
      const data = await pageList(payLoad.url, payLoad.data)
      if (data.code == 200) {
        commit('changeUserList', data.data.result)
        commit('changeUserAccount', data.data.total)
      }
    }
  }
}
export default systemModule
