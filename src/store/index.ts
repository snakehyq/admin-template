import { createStore } from 'vuex'
import loginModule from './login/login'
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
    loginModule
  }
})

export default store
