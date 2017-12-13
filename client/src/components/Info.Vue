<template>
  <div>
    <div class="text-xs-center title">
      <h1>Nuestro Hogar</h1>
      <p>Existen diferentes maneras de estar con nosotros</p>
    </div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex class="card-info" xs12 sm4>
          <img class="logo" src="public/sincro.png" alt="sincro">
          <h2 color="secondary">Sincronízate con la Naturaleza</h2>
          <p>Restauración + Ecoturismo</p>
        </v-flex>
        
        <v-flex class="card-info" xs12 sm4>
          <img class="logo" src="public/huellaemp.png" alt="huellaemp">
          <h2>Tu huella, Empresas</h2>
          <p>Aporta a los Objetivos de Desarrollo Sostenible</p>
        </v-flex>

        <v-flex class="card-info" xs12 sm4>
          <img class="logo" src="public/amapp.png" alt="amapp">
          <h2 color="teal">Amateapp</h2>
          <p>Vinculate y compensa tu huella</p>
        </v-flex>
        
      </v-layout>
    </v-container>
    <div class="news">
      <h1></h1>
    </div>
    <app-somosheader></app-somosheader>
  </div>
</template>

<script>
  import somosHeader from './SomosHuella/somosHeader'
  export default {
    components : {
      'app-somosheader' : somosHeader,
      },
    data () {
      return {
       
      }
    }
  }
</script>

<style lang="scss" scoped>
  h2 {
    color: #00B4CE;
    margin-top: 20px;
  }
  p {
    color: #9B9B9B;
    margin-top: 10px;
  }
  .card-info {
    margin-top: 80px;
  }
  .title {
    color: #21BFD5;
    margin-top: 30px;
  }
    h1 {
      margin: 20px;
    }
  .news {
    margin-top: 80px;
  }
</style>
