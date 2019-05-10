export default {
  namespaced: true,
  state: {
    pages: {
      index: {
        startTime: 3000, // 倒数开始时间
      }
    }
  },
  getters: {
    startTime: (state, getters, rootState, rootGetters) => {
      const current = state.pages[rootGetters.currentPage];

      return current.startTime;
    }
  },
  mutations: {
    UPDATE_START_TIME(state, { startTime, pageId }) {
      state.pages[pageId].startTime = startTime;
    }
  },
  actions: {
    updateStartTime({ rootGetters, commit }, payload) {
      commit('UPDATE_START_TIME', {
        ...payload,
        pageId: rootGetters.currentPage
      })
    }
  }
}
