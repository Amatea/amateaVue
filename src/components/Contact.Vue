<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex class="cont" xs12 sm6>
          <h1>Contactenos</h1>
          <div>
            <p>Escribenos tus comentarios y te respondermos lo más pronto posible</p>
          </div>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Nombre"
              v-model="user.nombre"
              :rules="user.nameRules"
              :counter="10"
              required
            ></v-text-field>
            <v-text-field
              label="Apellido"
              v-model="user.apellido"
              required
            ></v-text-field>
            <v-text-field
              label="Organización"
              v-model="user.organizacion"
            ></v-text-field>
            <v-text-field
              label="E-mail"
              v-model="user.email"
              :rules="user.emailRules"
              required
            ></v-text-field>
            <v-text-field
              label="Comentario"
              v-model="user.comentario"
              required
            ></v-text-field>

            <v-btn
              v-on:click="send(); go();"
              :disabled="!valid"
            >
              Enviar
            </v-btn>
            <v-btn @click="clear">Limpiar</v-btn>
          </v-form>
        </v-flex>

        <v-flex class="cont" xs12 sm6>
          <div>
            <h2>Soporte</h2>
            <p>Dirección: Calle 4 No 75 72</p>
            <p>email: hola@amatea.org</p>
            <p>Cel: 3187351034</p>
          </div>
          <div>
            <h2>Sede Campestre</h2>
            <div class="map">
              <v-map :zoom="zoom" :center="center">
                <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
                <v-marker :lat-lng="marker"></v-marker>
              </v-map>
            </div>
            <div>
              <h3>Cali - Colombia - Sudamerica</h3>
            </div>
          </div>
        </v-flex>
        

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Leaflet from 'vue2-leaflet';

export default {
  data() {
    return {
      valid: false,
      show: true,
      zoom: 13,
      center:[3.427, -76.597],
      marker: L.latLng(3.4269445544112576, -76.6040825843811),
      user: {
        nombre: '',
        nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
        ],
        apellido: '',
        organizacion: '',
        email: '',
        emailRules: [
        (v) => !!v || 'Email es requerido',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'debe ser valido'
        ],
        comentario: ''
      }
    };
  },
  methods: {
    send() {
      if (this.$refs.form.validate()) {
        axios.post('localhost:3001/api/mail_contacto', { 
            nombre: this.user.nombre,
            apellido: this.user.apellido,
            organizacion: this.user.organizacion,
            email: this.user.email,
            comentario: this.user.comentario
            })
        .then(function(response){
          console.log('saved successfully')
        })
      }
    },
    go() {
      this.$router.push('/') 
    },
    clear () {
        this.$refs.form.reset()
      }
  },
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer' :Vue2Leaflet.TileLayer,
    'v-geojson-layer' :Vue2Leaflet.GeoJSON,
    'v-marker': Vue2Leaflet.Marker
  }
};
</script>

<style lang="scss" scoped>
  @import '../main.scss';
  @import "~leaflet/dist/leaflet.css";

  .map {
    height: 300px;
  }

  .cont {
    margin-top: 20px;
    margin-bottom: 20px;
  }


</style>