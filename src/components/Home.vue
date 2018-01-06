<template>
  <v-app>
    <app-header></app-header>
    <app-info></app-info>
    <app-number></app-number>
    <app-partner></app-partner>
  </v-app>
</template>

<script>
  import Header from './Header'
  import Info from './Info'
  import Partner from './Partner'
  import Number from './Number'

  export default {
    components : {
      'app-header' : Header,
      'app-info' : Info,
      'app-partner' : Partner,
      'app-number' : Number
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

