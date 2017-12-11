<template>
    <div>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
        
            <v-flex ms6>
                <img class="img_header" src="public/img_Somos_Huella.png">
            </v-flex>
            <v-flex ms6 class="info_right">
                <h1 class="title_head">Somos Huella Somos Eco</h1>
                <h3>programa de Sustentabilidad empresarial</h3>
                <p class="subtitle">Medimos + Divulgamos + Compensamos</p>
            </v-flex>
        
        </v-layout>
    </v-container>
        
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

<style lang="scss" scoped>
  .title_head {
    color: #D52AED;
    font-weight: 300;
  }
  h3 {
    color: #0CB8D1;
    font-weight: 300;
  }
  .subtitle {
    color: #0CB8D1;
    font-weight: 300;
    margin-top: 50px;
  }
  .info_right {
      margin-top: 20px;
  }
  .img_header {
    width: 90%;
    object-fit: cover;
  }
  .title_info {
    color: #0CB8D1;
    margin-top: 10px;
  }
</style>
