<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import accueil from './components/accueil.vue'
import footerJS from './components/footer.vue'
</script>

<template>
  <header>
    <a href="/"><img alt="Vue logo" class="logo" src="./assets/logo.png" /></a>

    <div class="navbar">
    </div>
    <footerJS/>
  </header>


  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  position:fixed;
  top:0px;
  left:0px;
}

</style>
