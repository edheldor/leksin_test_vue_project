import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../views/MainLayout'
import LoginLayout from '../views/LoginLayout'

Vue.use(VueRouter);

export const routes = [
  {
    path: '/main',
    name: 'MainLayout',
    component: MainLayout
  },
  {
    path: '/login',
    name: 'LoginLayout',
    component: LoginLayout
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

//По умолчанию показываем LoginLayout
router.replace({name:'LoginLayout'});

export default router
