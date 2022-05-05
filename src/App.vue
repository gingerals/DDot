<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

export default {
    components: { Navbar }
}

</script>

<template>
  <Navbar />
  <div class="container">
    
    <router-view />
  </div>
</template>

<style>
</style>
