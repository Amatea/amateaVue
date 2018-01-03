<template>
  <div id="app">
    <v-app>
      <app-toolbar></app-toolbar>
      
      <router-view></router-view>
    
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
  import Toolbar from './components/Toolbar'
  import Footer from './components/Footer'
  export default {
    components : {
      'app-toolbar' : Toolbar,
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


