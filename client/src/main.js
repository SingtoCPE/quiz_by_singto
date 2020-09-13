/** @format */

import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import vuetify from './plugins/vuetify';
import * as rules from 'vee-validate/dist/rules';
import {ValidationObserver, ValidationProvider, extend} from 'vee-validate';
import '@/plugins/vee-validate';

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component('validation-observer', ValidationObserver);
Vue.component('validation-provider', ValidationProvider);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
