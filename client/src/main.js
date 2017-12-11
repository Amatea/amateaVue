import Vue from 'vue'
// import router from './router'
import Router from 'vue-router'
// import { sync } from 'vuex-router-sync'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import Toolbar from'./components/Toolbar'
import colors from 'vuetify/es5/util/colors'
import Home from './components/Home'
import Services from './components/Services'
import Header from './components/Header'
import Make from './components/Make'
import Contact from './components/Contact'
import SomosHuella from './components/SomosHuella'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: Services
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
      path: '/somoshuella',
      name: 'somos',
      component: SomosHuella
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
