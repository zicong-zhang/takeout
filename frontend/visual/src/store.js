import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: 'index',
    theme: {
      color: '#39f'
    },
    pagesConfig: {
      index: {
        components: [],
        title: '首页',
        backgroundColor: '',
        textColor: ''
      }
    }
  },
  getters: {
    currentPage: state => state.currentPage,
    pageTextColor: state => state.pagesConfig[state.currentPage].textColor
  },
  mutations: {
    addComponent(state, componentId) {
      const components = state.pagesConfig.index.components;
      components.push(componentId);
      state.pagesConfig.index.components = [...new Set(components)];
    },
    changePageTitleColor(state, backgroundColor) {
      state.pagesConfig[state.currentPage].backgroundColor = backgroundColor;
    },
    changePageTitleTextColor(state, textColor) {
      state.pagesConfig[state.currentPage].textColor = textColor;
    },
    changePageTitle(state, title) {
      state.pagesConfig[state.currentPage].title = title;
    }
  },
  actions: {},
  modules: {
    index: {
      state: {
        name: 'index'
      }
    },
    list: {
      state: {
        age: 12
      }
    }
  }
});
