import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/components/HomeView';
import SignUpView from '@/components/SignUpView';
import ErrorView from '@/components/ErrorView';

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
      path: '/signUp',
      name: 'SignUp',
      component: SignUpView,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorView,
    },
  ],
});
