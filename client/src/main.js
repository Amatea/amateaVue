import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import Toolbar from'./components/Toolbar.vue'

Vue.component('app-toolbar', Toolbar)

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
