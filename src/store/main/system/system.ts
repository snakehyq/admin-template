import { Module } from 'vuex'
import { IRoutState } from '@/store/type'
import { ISystemStore } from './type'
import { pageList } from '@/api/main/system/system'

const systemModule: Module<ISystemStore, IRoutState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return state[`${pageName.slice(1)}List`]
      }
    }
  },
  mutations: {
    changeUserList(state, data) {
      state.userList = data
    },
    changeUserAccount(state, data) {
      state.userCount = data
    },
    changeRoleList(state, data) {
      state.roleList = data
    },
    changeRoleAccount(state, data) {
      state.roleCount = data
    }
  },
  actions: {
    async getPageList({ commit }, payLoad: any) {
      // 1.获取url
      const pageName = payLoad.pageName
      const pageUrl = `${pageName}/list`
      // 2.发送请求
      const data = await pageList(pageUrl, payLoad.data)
      if (data.code == 200) {
        commit(
          'change' +
            pageName.slice(1, 2).toUpperCase() +
            pageName.slice(2).toLowerCase() +
            'List',
          data.data.result
        )
        commit(
          'change' +
            pageName.slice(1, 2).toUpperCase() +
            pageName.slice(2).toLowerCase() +
            'Account',
          data.data.total
        )
      }
    }
  }
}
export default systemModule
