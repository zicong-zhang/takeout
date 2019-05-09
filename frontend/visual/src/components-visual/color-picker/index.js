import Vue from 'vue';
import ColorPicker from './color-picker';

const Constructor = Vue.extend(ColorPicker);

const $ColorPicker = (options = {}) => {
  const defaultOptions = {
    title: '选择颜色',
    oldColor: '#000000',
    confirm: () => {},
    cancel: () => {},
  }
  
  const instance = new Constructor();
  Object.assign(instance.$data, defaultOptions, options);

  instance.$mount(document.createElement('div'));
  document.body.appendChild(instance.$el);
}

export default {
  install(Vue, options) {
    Vue.prototype.$ColorPicker = $ColorPicker;
    Vue.component(ColorPicker.name, ColorPicker);
  }
}
