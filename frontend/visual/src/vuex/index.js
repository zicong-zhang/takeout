import Vue from 'vue';
import Vuex from 'vuex';

import uniModules from './uni-modules';

Vue.use(Vuex);

const addPageConfig = (title) => {
  return {
    title,
    components: [],
    backgroundColor: '',
    textColor: '',
  }
}

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
    ADD_COMPONENT(state, componentId) {
      const components = state.pagesConfig[state.currentPage].components;
      components.push(componentId);
      state.pagesConfig[state.currentPage].components = [...new Set(components)];
    },
    changePageTitleColor(state, backgroundColor) {
      state.pagesConfig[state.currentPage].backgroundColor = backgroundColor;
    },
    changePageTitleTextColor(state, textColor) {
      state.pagesConfig[state.currentPage].textColor = textColor;
    },
    changePageTitle(state, title) {
      state.pagesConfig[state.currentPage].title = title;
    },
    CHANGE_PAGE(state, { value: pageId, label: name }) {
      const hasPageConfig = state.pagesConfig[pageId];
      
      if (!hasPageConfig) {
        const _pagesConfig = JSON.parse(JSON.stringify(state.pagesConfig));
        _pagesConfig[pageId] = addPageConfig(name);
        state.pagesConfig = _pagesConfig;
      }
      
      state.currentPage = pageId;
    }
  },
  actions: {
    // 为当前页面添加组件
    addComponent({ rootGetters, commit }, componentId) {
      commit(`${componentId}/ADD_USE_PAGE`, rootGetters.currentPage);
      commit('ADD_COMPONENT', componentId);
    },
    publish({ rootState }) {
      console.log('rootState:_____', rootState);
    }
  },
  modules: {
    ...uniModules,
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
