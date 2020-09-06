import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'src/assets/styles/index.less'
import 'src/plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
