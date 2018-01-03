<template>
    <div>
        
        <app-somosheader></app-somosheader>
            
        <v-container>
            <h1 class="title_info">¿Qué Hacemos?</h1>
            <p>Es nuestro programa de Sustentabilidad empresarial, donde ayudamos a las organizaciones a 
                generar mejores oportunidades económicas, sociales y ambientales de acuerdo a los retos 
                globales o megatendencias, apuntando a los Objetivos de Desarrollo Sostenible.</p>
            <div class="text-xs-center ico-ods">
              <img src="public/2_ODS.png">
              <img src="public/3_ODS.png">
              <img src="public/17_ODS.png">
            </div>
        </v-container>

        <v-container>
          <div class="text-xs-center text-h1">
            <h1>Determinamos aquellas soluciones que con menor inversión o esfuerzo generan el mayor valor económico sustentable .</h1>
          </div>
          <v-container class="ul" fluid grid-list-md>
            <v-layout  row wrap>
              <img class="img-tree" src="public/sincro.png">
              <p>Integramos metodologías de Evaluación de la sustentabilidad de las comunidades (ECCOS)</p> 
            </v-layout>
            <v-layout row wrap>
              <img class="img-tree" src="public/sincro.png">
              <p>Evaluación e impactos Ambiental Social y Económico en el ciclo de vida</p>
            </v-layout>
            <v-layout row wrap>
              <img class="img-tree" src="public/sincro.png">
              <p>Despliegue de las Funciones de Sustentabilidad (SFD) y Valor Sustentable Agregado</p>
            </v-layout>
          </v-container>
        </v-container>

        <v-container fluid grid-list-md >
          <v-layout class="text-xs-center" >
            <v-flex row wrap>
              <img src="public/huellaemp.png">
              <h1 class="title2">Somos Huella Somos Eco</h1>
            </v-flex>
          </v-layout>
          <div class="text-xs-center ele">
            <v-btn href="" round color="primary">Consumo Responsable</v-btn>
            <v-btn href="" round color="primary">Producción Inteligente</v-btn>
            <v-btn href="" round color="primary">Compensación Sustentable</v-btn>
          </div>
        </v-container>
    </div>
</template>

<script>
  import somosHeader from './somosHeader'
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
  
  h3 {
    color: #0CB8D1;
    font-weight: 300;
  }
  
  .title_info {
    color: #0CB8D1;
    margin-top: 10px;
    font-size: 3em;
    font-weight: 300;
  }
    p{
      color:#0CB8D1;
      font-size: 1.5em;
    }

  .ico-ods{
    margin: 60px;
  }
    img {
      margin-left: 50px;
    }
  .ul {
    margin-top: 60px;
  }
    .img-tree {
      width: 50px;
      height: 50px;
      margin: 8px;
    }
  .text-h1 {
    color: #D52AED;
    font-weight: 300;
  }
  
  .img2 {
    width: 40px;
    height: 40px;
  }

  .title2 {
    color: #D52AED;
    font-size: 3em;
    font-weight: 300;
  }

  .ele {
    margin: 40px;
  }
</style>
