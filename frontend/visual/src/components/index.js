import Vue from 'vue';

import cmBanner from './common/banner';
import cmSearchBar from './common/search-bar';
import cmAddress from './common/address';
import entryList from './common/entry-list';
import entryListConfig from './common/entry-list/config.vue';
import storeList from './common/store-list';

Vue.component('cmBanner', cmBanner);
Vue.component('cmSearchBar', cmSearchBar);
Vue.component('cmAddress', cmAddress);
Vue.component('entryList', entryList);
Vue.component('entryListConfig', entryListConfig);
Vue.component('storeList', storeList);

/* #ifdef H5 */
// import Image from './h5/image';

// Vue.component('image', Image);
/* #endif */

// 暴露给 ui 展示
export default [
  // {
  //   id: 'cmBanner',
  //   name: '广告轮播'
  // },
  {
    id: 'cmAddress',
    name: '地址',
    hasConfig: false,
  },
  {
    id: 'cmSearchBar',
    name: '搜索框',
    hasConfig: false,
  },
  {
    id: 'entryList',
    name: '入口列表',
    hasConfig: true,
  },
  {
    id: 'storeList',
    name: '附近店铺列表',
    hasConfig: false,
  }
];
