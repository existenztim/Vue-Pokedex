<script setup lang="ts">
import { RouterLink } from "vue-router"; //RouterLink help prevent page refreshing
</script>

<template>
  <h1>
    <RouterLink to="/">Pokemon App</RouterLink>
  </h1>
</template>

<style scoped lang="scss">
h1 {
  font-family: "Pokemon Solid", sans-serif;
  color: gold;
}
</style>
