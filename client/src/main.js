import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import Toolbar from'./components/Toolbar'
import colors from 'vuetify/es5/util/colors'

Vue.component('app-toolbar', Toolbar)

Vue.use(Vuetify, {
  theme: {
    primary: '#b0bec5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
