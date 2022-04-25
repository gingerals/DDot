<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

export default {
    components: { Navbar }
}

</script>

<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<style>
</style>
