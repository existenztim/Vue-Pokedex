<script setup lang="ts">
import PokemonSize from '@/components/pokemonCard/PokemonSize.vue';
import PokemonSprite from '@/components/pokemonCard/PokemonSprite.vue';
import PokemonStat from '@/components/pokemonCard/PokemonStat.vue';
import ErrorMsg from '@/components/ErrorMsg.vue';
import type { IpokemonResponse } from '@/models/IpokemonResponse';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const pokemon = ref<IpokemonResponse>();
let errorMsg = ref(false);
const route = useRoute();
const pokeUrl = route.params.pokemon;

onMounted(() => {
  axios
    .get<IpokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${pokeUrl}`)
    .then((response) => {
      const data = response.data;
      pokemon.value = {
        base_experience: data.base_experience,
        height: data.height,
        weight: data.weight,
        id: data.id,
        name: data.name,
        sprites: data.sprites,
        stats: data.stats,
      };
    })
    .catch((err) => {
      console.log(err);
      errorMsg.value = true;
    });
});
</script>

<template>
  <div v-if="pokemon" class="pokemon-card" :key="pokemon.id.toString()">
    <h1>{{ pokemon.name }}</h1>
    <div class="pokemon-sprite-container"><PokemonSprite :pokemon="pokemon" /></div>
    <div class="pokemon-size-container"><PokemonSize :pokemon="pokemon" /></div>
    <div class="pokemon-stat-container"><PokemonStat :pokemon="pokemon" /></div>
  </div>

  <div v-if="errorMsg">
    <ErrorMsg />
  </div>
</template>

<style scoped lang="scss">
.pokemon-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gold;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 15px;
  margin-top: 1rem;
  h1 {
    font-family: 'Pokemon Solid', sans-serif;
    color: #2a75bb;
  }
}
</style>
