import Vue from 'vue'
import Router from 'vue-router'
import Services from '../components/Services'
import Weare from '../components/Weare'
import Make from '../components/Make'
import Contact from '../components/Contact'
import Home from '../components/Home'
import SomosHuella from '../components/SomosHuella/SomosHuella'

Vue.use(Router)

export default new Router({
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
      path: '/weare',
      name: 'Somos',
      component: Weare
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
      name: 'Somos',
      component: SomosHuella
    },
    {
      path: '*',
      redirect: 'songs'
    }
  ]
})