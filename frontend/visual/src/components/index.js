import Vue from 'vue';

import cmBanner from './common/banner';
import cmSearchBar from './common/search-bar';
import cmAddress from './common/address';

import cmEntryList from './common/entry-list';
import cmEntryListConfig from './common/entry-list/config.vue';

import cmCountdownDiscount from './common/countdown-discount';
import cmCountdownDiscountConfig from './common/countdown-discount/config.vue';


Vue.component('cmBanner', cmBanner);
Vue.component('cmSearchBar', cmSearchBar);
Vue.component('cmAddress', cmAddress);

Vue.component('cmEntryList', cmEntryList);
Vue.component('cmEntryListConfig', cmEntryListConfig);

Vue.component('cmCountdownDiscount', cmCountdownDiscount);
Vue.component('cmCountdownDiscountConfig', cmCountdownDiscountConfig);


// 暴露给 可视化页面 展示
export default [
  // {
  //   id: 'cmBanner',
  //   name: '广告轮播'
  // },
  {
    id: 'cmAddress',
    name: '地址',
    noConfig: true,
  },
  {
    id: 'cmSearchBar',
    name: '搜索框',
    noConfig: true,
  },
  {
    id: 'cmEntryList',
    name: '入口列表',
  },
  {
    id: 'cmCountdownDiscount',
    name: '倒计时折扣',
  }
];
