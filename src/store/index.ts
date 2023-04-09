import { createStore } from 'vuex'
import loginModule from './login/login'
import systemModule from './main/system/system'
import { IRoutState } from './type'

const store = createStore<IRoutState>({
  state: () => {
    return {
      name: 'code'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    loginModule,
    systemModule
  }
})

export default store
