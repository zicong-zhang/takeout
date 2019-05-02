import Vue from 'vue';
import './styles/base.scss';
import './styles/iconfont.scss';


import App from './App.vue'
import router from './router'
import store from './store'

// 由 server 拷贝组件库过来
import components from './components';

import $Dialog from './components-ui/dialog';
Vue.use($Dialog)
import $ColorPicker from './components-ui/color-picker';
Vue.use($ColorPicker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
