<script>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/NavbarVue.vue';

export default {
    components: { Navbar }
}

</script>

<template>
  <Navbar />
  <div class="container">
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-lg-6">
              <router-view />
        </div>
        <div class="col-sm-3"></div>
    </div>

  </div>
</template>

<style>

</style>