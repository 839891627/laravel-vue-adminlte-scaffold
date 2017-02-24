import Vue from 'vue'
import VueRouter from 'vue-router'

import dashboard from './views/dashboard.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    component: dashboard,
    children: [{
      path: '/user',
      name: 'user',
      component: require('./views/user.vue'),
    }]
  }]
})

