<script setup lang="ts">
import { RouterView } from 'vue-router';
import HomeLink from './components/pageLayout/HomeLink.vue';
import FooterBar from './components/pageLayout/FooterBar.vue';

//fetchPokemon();
</script>

<template>
  <div class="home-link"><HomeLink /></div>
  <RouterView />
  <FooterBar />
</template>

<style scoped lang="scss">
.home-link {
  display: flex;
  justify-content: center;
}
</style>
