<template>
  <v-app>
    <app-header></app-header>
    <app-info></app-info>
    <app-partner></app-partner>
  </v-app>
</template>

<script>
  import Header from './Header'
  import Info from './Info'
  import Partner from './Partner'
  export default {
    components : {
      'app-header' : Header,
      'app-info' : Info,
      'app-partner' : Partner
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

