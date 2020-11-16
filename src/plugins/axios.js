import Vue from 'vue';
import http from '../libs/http';
Vue.use(http, {
  url:process.env.VUE_APP_BACKEND_COMERCIO
})