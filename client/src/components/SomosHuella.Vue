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
            <h1>Determinamos aquellas  soluciones que con menor inversión o esfuerzo generan el mayor valor económico sustentable .</h1>
        </v-container>
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
  
  h3 {
    color: #0CB8D1;
    font-weight: 300;
  }
  
  .title_info {
    color: #0CB8D1;
    margin-top: 10px;
  }
</style>
