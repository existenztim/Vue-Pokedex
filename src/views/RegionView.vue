<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import regionData from "../data/mockedPokemon.json";
import axios from "axios";
import type { IpokemonsResponse } from "@/models/IpokemonsResponse";
import type { Ipokemon } from "@/models/Ipokemon";
import PokemonLink from "@/components/PokemonLink.vue";
//https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20
//"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20
//https://pokeapi.co/api/v2/pokemon?limit=151&offset=0
const route = useRoute();

let pokemons = ref<Ipokemon[]>([]);
const regionName = route.params.name;
const region = regionData.find((region) => region.name === regionName);


onMounted(() => {
  if (region) {
    try {
      axios.get<IpokemonsResponse>(`${region.url}limit=${region.limit}&offset=${region.offset}`).then((response) => {
        pokemons.value = response.data.results;
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
  </div>
  <div v-else class="no-match-container">Can't find the region you are looking for 😢</div>
  <div v-if="pokemons" class="pokemon-list">
    <PokemonLink v-for="pokemon in pokemons" :key="pokemon.name" :pokemonProp="pokemon" />
  </div>
</template>

<style scoped lang="scss">
h1 {
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
  margin: 0 auto;
  max-width: 700px;
  overflow-y: scroll;
  background: rgba($color: #2a75bb, $alpha: 0.5);
  border-radius: 5px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  p {
    margin: 1rem;
  }
}
</style>
