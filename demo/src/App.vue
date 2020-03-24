<template>
  <div id="app">
    <PreviewImage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import PreviewImage from './components/PreviewImage.js'

export default {
  name: 'App',
  components: {
    PreviewImage
  }
}
</script>
<style>
html {
  width: 100%;
  height: 100%;
  background: #000;
}
html,body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aebdbd;
}
</style>
