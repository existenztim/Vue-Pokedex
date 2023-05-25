<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import regionData from '../data/mockedPokemon.json';
import axios from 'axios';
import type { IpokemonsResponse } from '@/models/IpokemonsResponse';
import type { Ipokemon } from '@/models/Ipokemon';
import PokemonLink from '@/components/PokemonLink.vue';
import ErrorMsg from '@/components/userFeedback/ErrorMsg.vue';
import TakeMeBack from '@/components/TakeMeBack.vue';
import NoMatch from '@/components/userFeedback/NoMatch.vue';

const route = useRoute();

let pokemons = ref<Ipokemon[]>([]);
let pokemonsSearch = ref<Ipokemon[]>([]);
let errorMsg = ref(false);

const regionName = route.params.name;
const region = regionData.find((region) => region.name === regionName);
const checkPokemons = ref(false);
const search = ref('');

watch(search, () => {
  search.value = search.value.toLowerCase();
  pokemons.value = pokemonsSearch.value.filter((pokemon: Ipokemon) =>
    pokemon.name.toLowerCase().includes(search.value)
  );
  pokemons.value.length > 0 ? (checkPokemons.value = false) : (checkPokemons.value = true);
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
  <TakeMeBack />
  <section class="container">
    <div class="search-container">
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </div>

    <div v-if="region" :class="`${region.name}-region-container`">
      <h1>Pokemons in {{ region.name }}.</h1>
    </div>

    <div v-if="errorMsg">
      <ErrorMsg />
    </div>

    <div v-if="pokemons" class="pokemon-list">
      <PokemonLink v-for="pokemon in pokemons" :key="pokemon.name" :pokemonProp="pokemon" />
    </div>
    <NoMatch v-if="checkPokemons" />
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

    input {
      border: none;
      color: #ffffff;
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
}
</style>
