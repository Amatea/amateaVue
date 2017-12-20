<template>
  <div>
    <form name="myForm1">
		    <div>
		        <label>Nombre:</label>
		        <div>
		            <input type="text" v-model="user.nombre">
		        </div>
		    </div>
		    <div >
		        <label>Apellido:</label>
		        
		            <input type="text" v-model="user.apellido">
		        
		    </div>
		    <div >
		        <label>Organización:</label>
		        <div >
		            <input type="text" v-model="user.organizacion">
		        </div>
		    </div>
		    <div >
		        <label>Email:</label>
		        <div >
		            <input type="email"  v-model="user.email">
		        </div>
		    </div>
		    <div >
		        <label>Comentario:</label>
		        <div >
		            <textarea type="text" v-model="user.comentario"></textarea>	
		        </div>
		    </div>
			<button type="submit" class="btn btn-default" @click="send">Enviar</button>
		</form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        nombre: '',
        apellido: '',
        organizacion: '',
        email: '',
        comentario: ''
		  }
    };
  },

  methods: {
    send() {
		
		axios.post('http://localhost:3000/api/mail_contacto', { 
			nombre: this.user.nombre,
			apellido: this.user.apellido,
			organizacion: this.user.organizacion,
			email: this.user.email,
			comentario: this.user.comentario
			})
  .then(function(response){
    console.log('saved successfully')
  });  

    }
  }
};
</script>

<style lang="scss" scoped>

</style>