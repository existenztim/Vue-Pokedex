<script setup lang="ts">
import { useRoute } from "vue-router";

const { pokemonProp } = defineProps(["pokemonProp"]);
const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const pokemonName = pokemonProp.name;
const route = useRoute();

const pokemonRoute = {
  region: "region",
  name: route.params.name
}


</script>

<template>
  <div class="pokemon-link">
    <h3>{{ pokemonProp.name.charAt([0]).toUpperCase() + pokemonProp.name.slice(1) }}</h3>
    <RouterLink :to="`/${pokemonRoute.region}/${pokemonRoute.name}/${pokemonProp.name}`">
      <p>Inspect this pokémon!</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
div[class$="-link"] {
  color: gold;
  display: flex;
  width: 300px;
  justify-content: space-around;
  gap: 2rem;
  margin: 1rem;
  h3 {
    font-weight: bold;
  }
  a {
    color: gold;
  }
}
</style>
