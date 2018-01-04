<template>
  <div class="partner">
    <div class="text-xs-center title">
      <h1>Tu tambien puedes hacer parte</h1>
      <p>vincúlate</p>
    </div>
    <v-container grid-list-md text-xs-center logos hidden-xs-only>
      <v-layout row wrap >
        <v-flex class="recamier" xs12 sm3></v-flex>
        <v-flex class="bancoomeva" xs12 sm3></v-flex>
        <v-flex class="jnj" xs12 sm3></v-flex>
        <v-flex class="sidoc" xs12 sm3></v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-md text-xs-center hidden-xs-only>
      <v-layout row wrap >
        <v-flex class="wwf" xs12 sm3></v-flex>
        <v-flex class="natura" xs12 sm3></v-flex>
        <v-flex class="cvc" xs12 sm3></v-flex>
        <v-flex class="parques" xs12 sm3></v-flex>
      </v-layout>
    </v-container>
    <div>
      <div ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .partner {
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .logos {
    margin-top: 70px;
  }

  h1 {
    font-weight: 300;
    margin-bottom: 30px;
  }

  .title {
    color: #21BFD5;
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: 300;
  }
  
  .recamier {
    background-image: url(/public/marcas/recamierbw.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 93px;
}
  .bancoomeva {
    background-image: url(/public/marcas/bancoo.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 93px;
    margin-top: -20px;
}
  .jnj {
      background-image: url(/public/marcas/jnjbw.png);
      background-size: 60% auto;
      background-repeat: no-repeat;
      width: 153px;
      height: 93px;
  }
  .sidoc {
    background-image: url(/public/marcas/sidocbw.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 93px;
    margin-top: -20px;
}
  .wwf {
    background-image: url(/public/marcas/wwfbw.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 93px;
    margin-top: -40px;
}
  .natura {
    background-image: url(/public/marcas/naturabw.png);
    background-size: 50% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 120px;
    margin-top: -50px;
}
  .cvc {
    background-image: url(/public/marcas/cvcbw.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 100px;
    margin-top: -40px;
}
  .parques {
    background-image: url(/public/marcas/paisbw.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 130px;
    margin-top: -60px;
}
</style>
