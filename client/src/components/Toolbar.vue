<template>
  <div>
    <v-toolbar color="teal lighten-2">
      <v-toolbar-title>
        <img class="logo" src="public/logo.png" alt="logo amatea">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-items v-for="item in items" :key="item.title"  class="hidden-xs-only">
        <v-btn color="accent" :href='item.click' flat>{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-layout wrap>
      <v-navigation-drawer
        temporary
        v-model="drawer"
        dark
        absolute
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <!-- <v-list-tile-avatar>
              <img src="http://www.amatea.org/img/logo_amatea.png" />
            </v-list-tile-avatar> -->
            <v-list-tile-content>
              <v-list-tile-title>Amatea</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" :href='item.click'>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><a >{{ item.title }}</a></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
       
        

         
            <v-flex class="text-xs-center" color="white">
              <a href="http://facebook.com/amateaorg" target="_blank"><v-icon class="ico" >fa-facebook-official</v-icon></a>
              <a href="http://instagram.com/amateaorg" target="_blank"><v-icon class="ico">fa-instagram</v-icon></a>
              <a href="http://youtube.com/comunicateatv" target="_blank"><v-icon class="ico">fa-youtube</v-icon></a>
            </v-flex>
         
       
           
          
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
       drawer: null,
        items: [
          { title: 'Inicio', icon: 'home', click: '/' },
          { title: 'Somos', icon: 'group', click: '/weare' },
          { title: 'Servicios', icon: 'spa', click: '/services' },
          { title: 'Hacemos', icon: 'filter_vintage', click: '/make' },
          { title: 'Blog', icon: 'filter_vintage', click: '/blog' },
          { title: 'Contactenos', icon: 'public', click: '/contact' }
         ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
  .logo {
    background-size: 100% auto;
    background-repeat: no-repeat;
    width: 130px;
  }
  .ico {
    margin: 10px;
  }
</style>

