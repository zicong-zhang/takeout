import Vue from 'vue';
import CmBanner from './common/banner';
import CmSearchBar from './common/search-bar';
import Address from './common/address';
import EntryList from './common/entry-list';
import StoreList from './common/store-list';

Vue.component('CmBanner', CmBanner);
Vue.component('CmSearchBar', CmSearchBar);
Vue.component('Address', Address);
Vue.component('EntryList', EntryList);
Vue.component('StoreList', StoreList);

/* #ifdef H5 */
// import Image from './h5/image';

// Vue.component('image', Image);
/* #endif */

// 暴露给 ui 展示
export default [
  // {
  //   id: 'CmBanner',
  //   name: '广告轮播'
  // },
  {
    id: 'Address',
    name: '地址'
  },
  {
    id: 'CmSearchBar',
    name: '搜索框'
  },
  {
    id: 'EntryList',
    name: '入口列表'
  },
  {
    id: 'StoreList',
    name: '附近店铺列表'
  }
];
