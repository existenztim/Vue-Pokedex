<script setup lang="ts">
import { RouterLink } from 'vue-router'; //RouterLink help prevent page refreshing
</script>

<template>
  <h1>
    <RouterLink to="/" aria-label="Take me home">Vue Pokedex</RouterLink>
  </h1>
</template>

<style scoped lang="scss">
h1,
a {
  font-family: 'Pokemon Solid', sans-serif;
  font-size: 4rem;
  text-shadow: 2px 4px 2px #2a75bb;
  color: gold;

  a {
    text-decoration: none;
  }
}
</style>
