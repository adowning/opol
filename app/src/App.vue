

<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <!-- Render Layout -->
    <app-layout></app-layout>
  </div>
</template>

<script>
import Layout from './components/layout/Master'
export default {
  components: {
    'app-layout': Layout
  }
}
</script>

<style></style>
