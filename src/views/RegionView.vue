<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import regionData from '../data/mockedPokemon.json';
import axios from 'axios';
import type { IpokemonsResponse } from '@/models/IpokemonsResponse';
import type { Ipokemon } from '@/models/Ipokemon';
import PokemonLink from '@/components/PokemonLink.vue';
import ErrorMsg from '@/components/ErrorMsg.vue';
//https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20
//"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20
//https://pokeapi.co/api/v2/pokemon?limit=151&offset=0
const route = useRoute();

let pokemons = ref<Ipokemon[]>([]);
let pokemonsSearch = ref<Ipokemon[]>([]);
let errorMsg = ref(false);

const regionName = route.params.name;
const region = regionData.find((region) => region.name === regionName);

const search = ref('');

watch(search, () => {
  search.value = search.value.toLowerCase();
  pokemons.value = pokemonsSearch.value.filter((pokemon: Ipokemon) =>
    pokemon.name.toLowerCase().includes(search.value)
  );
});

onMounted(() => {
  if (region) {
    axios
      .get<IpokemonsResponse>(`${region.url}limit=${region.limit}&offset=${region.offset}`)
      .then((response) => {
        pokemons.value = response.data.results;
        pokemonsSearch.value = response.data.results;
      })
      .catch((err) => {
        console.log(err);
        errorMsg.value = true;
      });
  }
});
</script>

<template>
  <section class="container">
    <div class="search-container">
      <input v-model.trim="search" type="text" placeholder="Find what you look for..." />
    </div>
    <div v-if="region" :class="`${region.name}-region-container`">
      <h1>Pokemons in {{ region.name }}.</h1>
    </div>

    <div v-else class="no-match-container">
      <p>Can't find the region you are looking for 😢</p>
    </div>

    <div v-if="errorMsg">
      <ErrorMsg />
    </div>

    <div v-if="pokemons" class="pokemon-list">
      <PokemonLink v-for="pokemon in pokemons" :key="pokemon.name" :pokemonProp="pokemon" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  color: gold;
  max-width: 1000px;
  margin: 0 auto;
  h1 {
    font-family: 'Pokemon Solid', sans-serif;
    text-shadow: 2px 4px 2px #2a75bb;
  }

  div[class$='region-container'] {
    display: flex;
    justify-content: center;
    color: gold;
  }
  .search-container {
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    align-items: flex;
    input {
      border: none;
      color: #382d01;
      font-weight: bold;
      background-color: rgba($color: #2a75bb, $alpha: 0.5);
      padding: 0.5rem;
      border-radius: 5px;
    }
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

  .no-match-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      color: black;
    }
  }
}
</style>
