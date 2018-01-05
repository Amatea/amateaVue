import Vue from 'vue'
import router from './router'
// import { sync } from 'vuex-router-sync'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#21BFD5',
    secondary: '#b0bec5',
    accent: 'white',
    error: '#b71c1c'
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
