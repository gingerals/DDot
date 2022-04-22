<script >
import { RouterLink, RouterView } from 'vue-router'
<<<<<<< HEAD
import Navbar from './components/Navbar.vue';
=======
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar }
}
>>>>>>> 8abd896be4a515d5582bb2ea6033a2adc0dee72b
</script>

<template>
  <Navbar />
<<<<<<< HEAD
</template>

<style>
=======
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>



>>>>>>> 8abd896be4a515d5582bb2ea6033a2adc0dee72b
</style>
