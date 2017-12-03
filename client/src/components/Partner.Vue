<template>
  <div class="partner">
    <div class="text-xs-center">
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
  }
  .logos {
    margin-top: 70px;
  }
  
  .recamier {
    background-image: url(http://amatea.org/img/marcas/recamierbw.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 93px;
}
  .bancoomeva {
    background-image: url(/public/bancoo.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 93px;
    margin-top: -20px;
}
  .jnj {
      background-image: url(http://amatea.org/img/marcas/jnjbw.png);
      background-size: 60% auto;
      background-repeat: no-repeat;
      width: 153px;
      height: 93px;
  }
  .sidoc {
    background-image: url(http://amatea.org/img/marcas/sidocbw.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 93px;
    margin-top: -20px;
}
  .wwf {
    background-image: url(http://amatea.org/img/marcas/wwfbw.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 93px;
    margin-top: -40px;
}
  .natura {
    background-image: url(http://amatea.org/img/marcas/naturabw.png);
    background-size: 50% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 120px;
    margin-top: -50px;
}
  .cvc {
    background-image: url(http://amatea.org/img/marcas/cvcbw.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 100px;
    margin-top: -40px;
}
  .parques {
    background-image: url(http://amatea.org/img/marcas/paisbw.png);
    background-size: 60% auto;
    background-repeat: no-repeat;
    width: 153px;
    height: 130px;
    margin-top: -60px;
}
</style>
