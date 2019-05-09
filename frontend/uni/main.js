import Vue from 'vue'
import App from './App'
import store from './vuex';

// 全局组件注册
/* @fm-register-component-start */
// 这里注册的全局组件在输出项目时，会根据可视化传递的配置按需注册

import Address from './components/common/address';
import SearchBar from './components/common/search-bar';
import entryList from './components/common/entry-list';
import storeList from './components/common/store-list';

Vue.component('Address', Address);
Vue.component('SearchBar', SearchBar);
Vue.component('entryList', entryList);
Vue.component('storeList', storeList);

/* @fm-register-component-end */

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store;

const app = new Vue({
    ...App,
    store,
})
app.$mount()
