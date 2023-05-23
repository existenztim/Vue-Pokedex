<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, RouterView } from "vue-router";
import regionData from "../data/quiz.json";
import axios from "axios";
import type { IpokemonResponse } from "@/models/IpokemonResponse";
import type { Ipokemon } from "@/models/Ipokemon";

const route = useRoute();
let pokemons = ref<Ipokemon[]>([]);
const regionName = route.params.name;
const region = regionData.find((region) => region.name === regionName);

onMounted(() => {
  if (region) {
    try {
      axios.get<IpokemonResponse>(`${region.url}`).then((response) => {
        pokemons.value = response.data.pokemon_species;
        console.log("response", response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }
});
</script>

<template>
  <div v-if="region" :class="`${region.name}-container`">
    <h1>Pokemons in {{ region.name }}.</h1>
    <!--<button @click="fetchPokemon">tryck för att testa fetch</button>-->
  </div>
  <div v-else class="no-match-container">Can't find the region you are looking for 😢</div>
  <RouterView />
  <div v-if="pokemons" class="pokemon-list">
    <div v-for="pokemon in pokemons">
      <p>{{ pokemon.name }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  font-family: "Pokemon Solid", sans-serif;
}

div[class$="-container"] {
  display: flex;
  justify-content: center;
  color: gold;
}

.pokemon-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  p {
    margin: 1rem;
  }
}
</style>
