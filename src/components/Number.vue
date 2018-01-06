<template>
  <div>
    <div class="box">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap >
          <v-flex xs12 sm4 class="align">
            <v-icon x-large dark>spa</v-icon>
            <h1>5.000 Ha</h1>
            <p>en proceso de restauración</p>
          </v-flex>
          <v-flex xs12 sm4 class="align">
            <v-icon x-large dark>local_florist</v-icon>
            <h1>8.500</h1>
            <p>árboles sembrados</p>
          </v-flex>
          <v-flex xs12 sm4 class="align">
            <v-icon x-large dark>add_location</v-icon>
            <h1>180</h1>
            <p>microcuencas</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../main.scss';
  h1 {
    color: white;
    font-size: 3em;
  }

  p {
    color: white;
    font-size: 1.3em;
  }

  .box {
    margin-top: 40px;
    height: 100%;
    width: 100%;
    background-color: $secundary;
  }

  .align {
    margin-top: 40px;
    margin-bottom: 40px;
  }
</style>