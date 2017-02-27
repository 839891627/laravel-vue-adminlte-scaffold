import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router.js'
import store from './store'

new Vue(Vue.util.extend({ router, store }, App)).$mount('#app')


