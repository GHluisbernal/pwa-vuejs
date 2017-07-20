// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Import css vendor libraries
import 'font-awesome/css/font-awesome.css';
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';

import Vue from 'vue';
import app from './app';
import appNav from './components/app-nav';
import appFooter from './components/app-footer';
import router from './router';

// import 'tether'; // eslint-disable-line
// import 'jquery/dist/jquery';
// import 'tether/dist/js/tether';
// import 'mdbootstrap/js/bootstrap';
// import 'mdbootstrap/js/mdb';

Vue.config.productionTip = false;

Vue.component('app-nav', appNav);
Vue.component('app-footer', appFooter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app },
});
