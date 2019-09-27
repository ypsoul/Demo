import {
  reqApi2
} from '../../mutation-type'

export default {
  namespaced: true,
  state: {
    count: 18
  },
  actions: {
    reqApi (context, payload) {
      setTimeout(() => {
        context.commit(reqApi2, 2)
      }, 1000)
    }
  },
  mutations: {
    [reqApi2] (state, payload) {
      state.count = state.count + payload
    }
  }
}
