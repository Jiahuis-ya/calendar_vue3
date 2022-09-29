import { createStore } from 'vuex'
import headerStore from './modules/header/index.js'
// import mutations from './mutations.js'

export default createStore({
  state: {
    // placeholder: "请输入...",
    // maxLength: 8
  },
  getters: {
  },
  // mutations,
  actions: {
  },
  modules: {
    headerStore
  }
})
