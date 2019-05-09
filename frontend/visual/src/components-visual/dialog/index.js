import Vue from 'vue';
import Dialog from './dialog';

const Constructor = Vue.extend(Dialog);

const $Dialog = (options = {}) => {
  const defaultOptions = {
    content: ''
  }
  
  const instance = new Constructor();
  Object.assign(instance.$data, defaultOptions, options);

  console.log('instance:_____', instance);

  instance.$mount(document.createElement('div'));
  document.body.appendChild(instance.$el);
}

export default {
  install(Vue, options) {
    Vue.prototype.$Dialog = $Dialog;
    Vue.component(Dialog.name, Dialog);
  }
}
