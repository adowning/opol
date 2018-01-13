<template>
  <div id="workshop">
    <!-- <img src="./assets/logo.png"> -->
    <div class="ui container">
      <my-vuetable></my-vuetable>
    </div>
  </div>
</template>

<script>
import MyVuetable from './MyVuetable'

export default {
  name: 'workshop',

  components: {
    MyVuetable
  }
}
</script>

<style>
#workshop {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
