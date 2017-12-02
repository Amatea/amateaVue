<template>
  <v-toolbar color="teal accent-3">
    <v-toolbar-title>
      <img class="logo" src="http://www.amatea.org/img/logo_amatea.png" alt="logo amatea">
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
       
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    background-size: 100% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 53px;
  }
</style>

