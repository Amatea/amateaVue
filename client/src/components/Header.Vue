<template>
  <div>
    <video poster="http://www.amatea.org/img/home.jpg" id="bgvid" playsinline autoplay muted loop>
      <!-- WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  -->
      <source src="public/video.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  
@media only screen and (max-width: 600px) {
  .head-img {
    width: 100%;
    height: 150px;
  }
}
video { 
  background-size: 100% auto;
  width: 100%;
  transition: 1s opacity;
}
</style>

