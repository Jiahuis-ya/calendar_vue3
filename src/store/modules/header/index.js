import state from './state.js'
import mutations from './mutations.js'
import mutations2 from '../../mutations'

export default {
  namespaced: true,
  state,
  getters: {

  },
  mutations: {
    ...mutations,
    ...mutations2
  },
  action: {

  }
}
