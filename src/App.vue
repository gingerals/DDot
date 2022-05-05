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
    <div class="row">
        <div class="col"></div>
        <div class="col-xl">
              <router-view />
        </div>
        <div class="col"></div>
    </div>

  </div>
</template>

<style>

</style>
