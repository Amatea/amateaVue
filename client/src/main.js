import Vue from 'vue'
// import router from './router'
import Router from 'vue-router'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import Toolbar from'./components/Toolbar'
import colors from 'vuetify/es5/util/colors'
import Home from './components/Home'
import Header from './components/Header'
import Make from './components/Make'
import Contact from './components/Contact'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/make',
      name: 'make',
      component: Make
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      redirect: 'make'
    }
  ]
})

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
  router,
  render: h => h(App)
})
