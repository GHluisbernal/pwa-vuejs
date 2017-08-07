// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Import css vendor libraries
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/mdbootstrap/css/mdb.css';

import 'jquery';
import 'popper.js';
import 'bootstrap';

import Vue from 'vue';
import VeeValidate from 'vee-validate';
import app from './app';
import appNav from './components/app-nav';
import appFooter from './components/app-footer';
import router from './router';

Vue.config.productionTip = false;

const veeValidateConfig = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  enableAutoClasses: true,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty', // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
};
Vue.use(VeeValidate, veeValidateConfig);

Vue.component('app-nav', appNav);
Vue.component('app-footer', appFooter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app },
});
