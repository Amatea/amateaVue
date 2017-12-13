<template>
    <div>
        
        <app-somosheader></app-somosheader>
            
        <v-container>
            <h1 class="title_info">¿Qué Hacemos?</h1>
            <p>Es nuestro programa de Sustentabilidad empresarial, donde ayudamos a las organizaciones a 
                generar mejores oportunidades económicas, sociales y ambientales de acuerdo a los retos 
                globales o megatendencias, apuntando a los Objetivos de Desarrollo Sostenible.</p>
            <img src="public/2_ODS.png">
            <img src="public/3_ODS.png">
            <img src="public/17_ODS.png">
        </v-container>

        <v-container>
            <div class="text-xs-center text-h1">
              <h1>Determinamos aquellas soluciones que con menor inversión o esfuerzo generan el mayor valor económico sustentable .</h1>
            </div>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <img src="public/sincro.png">
                <p>Integramos metodologías de Evaluación de la sustentabilidad de las comunidades (ECCOS)</p> 
              </v-layout>
              <v-layout row wrap>
                <img src="public/sincro.png">
                <p>Evaluación e impactos Ambiental Social y Económico en el ciclo de vida</p>
              </v-layout>
              <v-layout row wrap>
                <img src="public/sincro.png">
                <p>Despliegue de las Funciones de Sustentabilidad (SFD) y Valor Sustentable Agregado</p>
              </v-layout>
            </v-container>
        </v-container>

        <v-container class="text-xs-center">
          <v-layout row wrap>
            <img src="public/huellaemp.png">
            <h1>Somos Huella Somos Eco</h1>
          </v-layout>
          <div class="text-xs-center buttom">
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
  }

  .text-h1 {
    color: #D52AED;
    font-weight: 300;
  }
  
  img {
    width: 40px;
    height: 40px;
  }
</style>
