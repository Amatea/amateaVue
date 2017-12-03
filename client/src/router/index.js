import Vue from 'vue'
import Router from 'vue-router'
import Services from '../components/Services'
import Make from '../components/Make'
import Contact from '../components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '*',
      redirect: 'songs'
    }
  ]
})