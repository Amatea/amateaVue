<template>
  <div>
    <v-toolbar color="light-green">
      <v-toolbar-title>
        <img class="logo" src="http://www.amatea.org/img/logo_amatea.png" alt="logo amatea">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>Somos</v-btn>
        <v-btn flat>Servicios</v-btn>
        <v-btn flat>Hacemos</v-btn>
        <v-btn flat>Contactenos</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-layout wrap>
      <v-navigation-drawer
        temporary
        v-model="drawer"
        light
        absolute
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="http://www.amatea.org/img/logo_amatea.png" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Amatea</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
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
          { title: 'Somos', icon: 'dashboard' },
          { title: 'Servicios', icon: 'question_answer' },
          { title: 'Hacemos', icon: 'question_answer' },
          { title: 'Contactenos', icon: 'question_answer' }
         ]
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

