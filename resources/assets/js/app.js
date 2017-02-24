import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router.js'

new Vue(Vue.util.extend({ router }, App)).$mount('#app')


