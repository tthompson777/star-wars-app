import Vue from "vue";
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import { CardPlugin } from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(CardPlugin);

new Vue({
  el: "#app",
  render: h => h(App)
});
