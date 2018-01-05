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
                    <div class="text-xs-center buttom">
                        <v-btn href="/contact" round color="primary">Enterate</v-btn>
                    </div>
                </v-flex>
            
            </v-layout>
        </v-container>
    </div>
</template>

<style lang="scss" scoped>
  .title_head {
    color: #D52AED;
    font-weight: 300;
    font-size: 2.4em;
  }
  h3 {
    color: #0CB8D1;
    font-weight: 300;
    font-size: 1.5em;
  }
    p {
        font-size: 1.5em;
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
  .buttom{
      margin-top: 60px;
  }

</style>
