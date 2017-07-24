import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView';
import LogInView from '@/views/LogInView';
import SignUpView from '@/views/SignUpView';
import ErrorView from '@/views/ErrorView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: LogInView,
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUpView,
    },
    {
      path: '/Error',
      name: 'Error',
      component: ErrorView,
    },
  ],
});
