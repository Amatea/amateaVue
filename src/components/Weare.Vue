<template>
  <div>
    <v-toolbar class="barra">
      <v-toolbar-title color="teal">Somos</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items >
          <v-btn color="teal" id="btn-cosmo" flat>Cosmovisión</v-btn>
          <v-btn color="teal" id="btn-goals" flat>Objetivos</v-btn>
          <v-btn color="teal" id="btn-history" flat>Historia</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container class="cont">
      <div id="cosmo">
      </div>
      <h1>
        Cosmovisión
      </h1>
      <p class="p_gral">
        Contribuir a la armonía del ser y la naturaleza, reconectándonos con los ciclos naturales que permitan un cambio de paradigma del sentir-pensar de los seres humanos, el cual nos mantenga en equilibrio con nuestro entorno.
      </p>
    </v-container>
    <img class="hidden-xs-only" src="/public/somos_back.jpg">

    <v-container>
      <div id="goals">
      </div>
      <h1>
        Objetivos
      </h1>
      <p class="p_gral">Nos enfocamos en 6 de los 17 Objetivos de Desarrollo Sostenible de las Naciones Unidas.</p>
      <div grid-list-xs>
        <v-layout class="ODS" row wrap>
          <div xs2 class="square_ODS">
            <h3>6</h3>
            <p>
              AGUA LIMPIA Y SANEAMIENTO
            </p>
          </div>
          <div xs2 class="square_ODS_v">
            <h3>11</h3>
            <p>
              CIUDADES Y COMUNIDADES SUSTENTABLES
            </p>
          </div>
          <div xs2 class="square_ODS">
            <h3>12</h3>
            <p>
              PRODUCCIÓN y CONSUMO RESPPONSABLE
            </p>
          </div>
          <div xs2 class="square_ODS_v">
            <h3>13</h3>
            <p>
              ACCIÓN POR EL CLIMA
            </p>
          </div>
          <div xs2 class="square_ODS">
            <h3>15</h3>
            <p>
              VIDA DE ECOSISTEMAS TERRESTRES
            </p>
          </div>
          <div xs2 class="square_ODS_v">
            <h3>17</h3>
            <p>
              ALIANZAS PARA LOGRAR LOS OBJETIVOS
            </p>
          </div>
        </v-layout>
      </div>
      <p class="text-xs-center p_gral">Priorizamos 7 metas que nos permiten lograr nuestra cosmovisión</p>
    </v-container>
    <v-container>
      <div id="history">
      </div>
      <h1>
        Historia
      </h1>
      <p class="p_gral">Amatea fue fundada en el año {{born}}, por un grupo de profesionales del área ambiental, con {{exp2}} años de experiencia en el desarrollo de metodologías de ordenamiento del territorio sustentable.</p>
      <p class="p_gral">Desde el año 2003 venimos trabajando de la mano con Parques Nacionales Naturales, autoridad Ambiental que avala los procesos desarrollados en el Parque Nacional Natural Farallones de Cali.</p>
      <p class="p_gral">En el año 2005 participamos en el proyecto GEO Juvenil Colombia de las Naciones Unidas, el cual nos abrió las puertas para representar al Programa de las Unidas para el Medio Ambiente Juvenil en el Foro Mundial del Agua, y de esa forma exponer nuestro trabajo.</p>
      <p class="p_gral">En el año 2006, empezamos una nueva etapa con la inclusión de las empresas privadas, que empezaron aportar en los proyectos de Restauración Ecológica; a la fecha, trabajamos con las compañías en proyectos de compensación y manejo sustentable de los bienes y servicios.</p>
      <p class="p_gral">Para más información, puedes visitar el link proyectos, ahí describimos nuestro trabajo por medio de los proyectos</p>
      </v-container>
  </div>
</template>

<script>
import jquery from "jquery";

export default {
  data() {
    let exp = year2;
    let year2 = new Date().getFullYear();
    const born2 = 2003;
    return {
      born: born2,
      exp2: year2 - born2
    };
  },
  mounted() {
    this.$nextTick(() => {
      $(document).ready(function() {
        var altura = $(".barra").offset().top;

        $(window).on("scroll", function() {
          if ($(window).scrollTop() > altura) {
            $(".barra").addClass("barra-fixed");
          } else {
            $(".barra").removeClass("barra-fixed");
          }
        });

        $("#btn-cosmo").click(function() {
          $("html, body").animate(
            {
              scrollTop: $("#cosmo").offset().top
            },
            1000
          );
        });

        $("#btn-goals").click(function() {
          $("html, body").animate(
            {
              scrollTop: $("#goals").offset().top
            },
            1000
          );
        });

        $("#btn-history").click(function() {
          $("html, body").animate(
            {
              scrollTop: $("#history").offset().top
            },
            1000
          );
        });

      });
    });
  }
};
</script>

<style lang="scss" scoped>
.barra {
  margin: auto;
}
.barra-fixed {
  position: fixed;
  top: 0;
  z-index: 100;
}

h1 {
  color: #d52aed;
  margin-top: 30px;
}

.p_gral {
  color: grey;
  font-weight: 300;
  font-size: 1.5em;
  margin-top: 20px;
}

.cont {
  position: absolute;
}

img {
  max-width: 100%;
}

.ODS {
  justify-content: center;
}

.square_ODS {
  width: 120px;
  height: 120px;
  background-color: #0cb8d1;
  padding: 13px;
  border-radius: 10%;
  color: white;
  margin: 10px;
}

.square_ODS_v {
  width: 120px;
  height: 120px;
  background-color: #d52aed;
  padding: 13px;
  border-radius: 10%;
  color: white;
  margin: 10px;
}

#history{
  margin-top: 0px;
  height: 40px;
}

#goals{
  margin-top: 0px;
  height: 40px;
}

#cosmo{
  margin-top: 0px;
  height: 40px;
}

@media only screen and (max-width: 600px) {
  .cont {
    position: relative;
  }
}
</style>

