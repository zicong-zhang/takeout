import Vue from 'vue';
import './styles/base.scss';
import './styles/iconfont.scss';

import ElementUI from 'element-ui';
import '../theme/index.css';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import App from './App.vue'
import router from './router'
import store from './vuex'

// 由 server 拷贝组件库过来
import './components';

// 可视化页面的公用组件
import './components-visual';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
