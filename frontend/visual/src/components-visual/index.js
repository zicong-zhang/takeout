import Vue from 'vue';

import ViInput from './input';
import ViFormItem from './form-item';
import ViTitle from './title';

Vue.component('vi-input', ViInput);
Vue.component('vi-form-item', ViFormItem);
Vue.component('vi-title', ViTitle);


import $Dialog from './dialog';
import $ColorPicker from './color-picker';

Vue.use($Dialog)
Vue.use($ColorPicker)
