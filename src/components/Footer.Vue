<template>
  <v-footer class="pa-4 footer">
    <div>
      <a href="http://facebook.com/amateaorg" target="_blank"><v-icon class="ico">fa-facebook-official</v-icon></a>
      <a href="http://instagram.com/amateaorg" target="_blank"><v-icon class="ico">fa-instagram</v-icon></a>
      <a href="http://youtube.com/comunicateatv" target="_blank"><v-icon class="ico">fa-youtube</v-icon></a>
    </div>
    <v-spacer></v-spacer>
    <div>© {{ new Date().getFullYear() }}</div>
    
  </v-footer>
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
@import '../main.scss';
  .footer {
    background-color: $secundary;
  }
  a {
    text-decoration: none;
  }
  footer {
    color: white;
  }
  .ico {
    color: white;
    margin-left: 20px;
  }
</style>

