import { Component } from 'vue-property-decorator'
Component.registerHooks(['validations']);
require('vue-ionicons/ionicons.css');
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate';
import moment from 'moment';
Vue.use(Vuelidate);

Vue.config.productionTip = false;
moment.locale('ru');

(window as any).app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
