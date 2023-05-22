<script setup lang="ts">
import { useRoute, RouterView } from "vue-router";
import regionData from "../data/quiz.json";
const route = useRoute();

const regionName = route.params.name;
console.log(regionName);
const region = regionData.find((region) => region.name === regionName);
console.log(region);
</script>

<template>
  <div v-if="region" :class="`${region.name}-container`">
    <h1>Pokemons in {{ region.name }}.</h1>
  </div>
  <div v-else class="no-match-container">Can't find the region you are looking for 😢</div>
  <RouterView />
</template>

<style scoped lang="scss">
div[class$="-container"] {
  font-family: "Pokemon Solid", sans-serif;
  display: flex;
  justify-content: center;
  color: gold;
}
</style>
