/**
 * Author : Emrah Kumru
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import JobList from 'components/jobs/jobList/JobList.vue';
import JobDetail from 'components/jobs/jobDetail/JobDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/jobList',
  },
  {
    path: '/jobList',
    name: 'JobList',
    component: JobList,
  },
  {
    path: '/jobDetail/:id',
    name: 'JobDetail',
    component: JobDetail
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});