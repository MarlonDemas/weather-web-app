import Vue from 'vue'

import router from 'vue-router';
Vue.use(router);

import JuniorRouter from '@/juniorRouter';

new Vue({
  router: JuniorRouter
}).$mount('#app')
