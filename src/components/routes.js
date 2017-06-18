import Vue from 'vue';
import VueRouter from 'vue-router';

import Header from 'components/default/header.js';
import Content from 'components/default/Content.js';
import Login from 'components/login';

Vue.use(VueRouter);

const routes =  [
  {
    path: '/',
    components: {
      header: Header,
      content: Content
    },
    children: [
      { path: 'login', name: 'login', component: Login }
    ]
  },
  // {
  //   path:'/login',
  //   components: {
  //     content: Login
  //   }
  // }
];

export default new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});
