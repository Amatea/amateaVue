<template>
  <v-app id="app">
    <app-toolbar></app-toolbar>
    <app-header></app-header>
    <app-info></app-info>
    <app-partner></app-partner>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import Header from './components/Header'
  import Info from './components/Info'
  import Partner from './components/Partner'
  import Footer from './components/Footer'
  export default {
    components : {
      'app-header' : Header,
      'app-info' : Info,
      'app-partner' : Partner,
      'app-footer' : Footer
      },
    data () {
      return {
       
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: teal
  }
</style>

