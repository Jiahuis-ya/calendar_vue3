import { createStore } from 'vuex'
import header from './modules/header/index.js'

export default createStore({
  state: {
    testName: '666'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    header
  }
})
