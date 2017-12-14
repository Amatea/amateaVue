<template>
  <div>
    <form name="myForm1">
		    <div>
		        <label>Nombre:</label>
		        <div>
		            <input type="text" >
		        </div>
		    </div>
		    <div >
		        <label>Apellido:</label>
		        <div >
		            <input type="text" >
		        </div>
		    </div>
		    <div >
		        <label>Organización:</label>
		        <div >
		            <input type="text"  >
		        </div>
		    </div>
		    <div >
		        <label>Celular:</label>
		        <div >
		            <input type="number"  >
		        </div>
		    </div>
		    <div >
		        <label>Email:</label>
		        <div >
		            <input type="email"  >
		        </div>
		    </div>
		    <div >
		        <label>Comentario:</label>
		        <div >
		            <textarea type="text" ></textarea>	
		        </div>
		    </div> 
		</form>
    



  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        post: ''
    }
  },

  created() {
          axios.get(`localhost:3000`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data
          })
          .catch(e => {
            console.log(e)
          })
      }
  }
</script>

<style lang="scss" scoped>
  
</style>