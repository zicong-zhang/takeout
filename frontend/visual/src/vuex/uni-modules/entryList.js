const createDefaultList = () => {
  return [
    {
      imgUrl: '',
      // imgUrl: 'https://fuss10.elemecdn.com/2/b5/927c7bc6a5f413bee5f0e0d889734png.png?imageMogr2/thumbnail/70x70/format/webp/quality/85',
      name: '超市便利',
      link: 'superMarket'
    }, {
      imgUrl: '',
      // imgUrl: 'https://fuss10.elemecdn.com/5/d4/ea22fa73606863435acab2c1858fbpng.png?imageMogr2/thumbnail/70x70/format/webp/quality/85',
      name: '蔬菜水果',
      link: 'fruits'
    }, {
      imgUrl: '',
      // imgUrl: 'https://fuss10.elemecdn.com/a/db/7aef28aa8d722d8fac437b7c30011jpeg.jpeg?imageMogr2/thumbnail/70x70/format/webp/quality/85',
      name: '老沙专送',
      link: 'vip'
    }, {
      imgUrl: '',
      // imgUrl: 'https://fuss10.elemecdn.com/8/cb/7a737af2bac3b252255a70e8f710fjpeg.jpeg?imageMogr2/thumbnail/70x70/format/webp/quality/85',
      name: '汉堡披萨',
      link: 'hamburger'
    }, {
      imgUrl: '',
      // imgUrl: 'https://fuss10.elemecdn.com/2/e4/1b1600b751e2e83a1717c8a7ee8eapng.png?imageMogr2/thumbnail/70x70/format/webp/quality/85',
      name: '医药健康',
      link: 'medicine'
    }, {
      imgUrl: '',
      // imgUrl: 'https://fuss10.elemecdn.com/0/1b/214623199b4747d7a579db0a703dcjpeg.jpeg?imageMogr2/thumbnail/70x70/format/webp/quality/85',
      name: '素食简餐',
      link: 'vegetarian'
    }, {
      imgUrl: '',
      // imgUrl: 'https://fuss10.elemecdn.com/9/14/af836b5fb9efab6d53ec44dd542a8jpeg.jpeg?imageMogr2/thumbnail/70x70/format/webp/quality/85',
      name: '地方小吃',
      link: 'snack'
    }, {
      imgUrl: '',
      name: '晚餐',
      link: 'dinner'
    }
  ]
}

export default {
  namespaced: true,
  state: {
    currentPage: 'index',
    pages: {
      index: {
        list: createDefaultList()
      }
    },
    aa: '123'
  },
  getters: {
    list: (state, getters, rootState, rootGetters) => {
      const current = state.pages[rootGetters.currentPage];
      console.log('getters:_____', rootState, rootGetters, current);
      if (!current) return createDefaultList();
      
      return current.list;
    },
  },
  mutations: {
    // 修改入口名称
    CHANGE_ENTRY_NAME(state, { idx, value, pageId }) {
      state.currentPage = pageId;
      debugger
      const list = [...state.pages[pageId].list];
      list[idx].name = value;
      state.pages[pageId].list = list;
    },
    // 修改入口 logo 图片
    UPLOAD_ENTRY_LOGO(state, { idx, img, pageId }) {
      state.currentPage = pageId;
      const list = [...state.pages[pageId].list];
      list[idx].imgUrl = img;
      state.pages[pageId].list = list;
    },
    // 添加一个使用当前组件的页面，达到页面的作用域效果
    ADD_USE_PAGE(state, pageId) {
      const isObj = Object.prototype.toString.call(state.pages[pageId]) === '[object Object]';
      const newPages = JSON.parse(JSON.stringify(state.pages));
      if (!isObj) {
        // state.pages[pageId] = {};
        newPages[pageId] = {};
      }
      
      newPages[pageId].list = createDefaultList();
      state.aa = '333';
      // state.pages[pageId].list = createDefaultList();
      state.pages = newPages;
      console.log(state);
      debugger
    }
  },
  actions: {
    // 修改入口名称
    changeEntryName({ rootGetters, commit }, payload) {
      const pageId = rootGetters.currentPage;
      debugger
      commit('CHANGE_ENTRY_NAME', {
        ...payload,
        pageId
      });
    },
    // 上传入口图片
    uploadEntryLogo({ rootGetters, commit }, payload) {
      const pageId = rootGetters.currentPage;
      commit('UPLOAD_ENTRY_LOGO', {
        ...payload,
        pageId
      });
    }
  }
}
