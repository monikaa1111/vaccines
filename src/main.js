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
// import App from './App.vue';


Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
