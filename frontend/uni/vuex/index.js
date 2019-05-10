import Vue from 'vue';
import Vuex from 'vuex';

import entryList from './modules/entry-list';

Vue.use(Vuex);

const store = new Vuex.Store({
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
        textColor: '',
      }
    }
  },
  getters: {
    currentPage: state => state.currentPage,
    currentPageConfig: (state, getters) => state.pagesConfig[getters.currentPage],
    pageTextColor: state => state.pagesConfig[state.currentPage].textColor,
    currentUseComponent: (state, getters) => getters.currentPageConfig.components,
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
    entryList,
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
})

export default store;
