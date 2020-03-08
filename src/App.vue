<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="app">home page</router-link>
    <router-link to="login">login page</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
   console.log(this.$store); 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
