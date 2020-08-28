// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$axios = Axios
Vue.use(VueAxios,Axios)
import 'element-ui/lib/theme-chalk/index.css';
import vueEsign from 'vue-esign'
Vue.use(vueEsign)
import Vuex from 'vuex'
Vue.use(Vuex)


Vue.use(ElementUI);

// import App from './App.vue';


Vue.config.productionTip = false
Vue.use(ElementUI);

import { NavBar } from 'vant'; 
Vue.use(NavBar);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
