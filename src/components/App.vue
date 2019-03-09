<template>
  <div class="main-container">
    <div style="width:100%; text-align:center">
      <img style="margin:auto auto" src="@/assets/logo.png">
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  created() {
    document.title = "ADEPT | Weather App";
  }
}
</script>

<style>
.main-container{
  max-width: 600px;
  margin: auto auto;
}
</style>
