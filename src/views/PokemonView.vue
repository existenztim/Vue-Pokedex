<script setup lang="ts">
import PokemonSize from '@/components/pokemonCard/PokemonSize.vue';
import PokemonSprite from '@/components/pokemonCard/PokemonSprite.vue';
import PokemonStat from '@/components/pokemonCard/PokemonStat.vue';
import ErrorMsg from '@/components/userFeedback/ErrorMsg.vue';
import type { IpokemonResponse } from '@/models/IpokemonResponse';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import PokemonType from '@/components/pokemonCard/PokemonType.vue';
import TakeMeBack from '@/components/TakeMeBack.vue';
import { getPokemonData } from '@/services/pokemonService';

const pokemon = ref<IpokemonResponse>();
let errorMsg = ref(false);
const route = useRoute();

const pokeUrl = {
  pokeName: route.params.pokemon,
  regionName: route.params.name,
};

onMounted(() => {
  try {
    const query = `https://pokeapi.co/api/v2/pokemon/${pokeUrl.pokeName}`;
    getPokemonData(query).then((pokemonFromApi) => {
      pokemon.value = pokemonFromApi;
    });
  } catch (err) {
    console.log(err);
    errorMsg.value = true;
  }
});
</script>

<template>
  <TakeMeBack :view="pokeUrl.regionName" />
  <div class="pokemon-card-container">
    <div v-if="pokemon" class="pokemon-card" :key="pokemon.id.toString()">
      <h1>{{ pokemon.name }}</h1>
      <div class="pokemon-sprite-container"><PokemonSprite :pokemon="pokemon" /></div>
      <div class="data-container">
        <div class="pokemon-size-container"><PokemonSize :pokemon="pokemon" /></div>
        <div class="pokemon-type-container"><PokemonType :pokemon="pokemon" /></div>
        <div class="pokemon-stat-container"><PokemonStat :pokemon="pokemon" /></div>
      </div>
    </div>
  </div>

  <div v-if="errorMsg">
    <ErrorMsg />
  </div>
</template>

<style scoped lang="scss">
.back-to-list {
  margin: 1rem;
  display: flex;
  justify-content: center;
}
.pokemon-card-container {
  min-height: 100vh;
  .pokemon-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to left bottom, #ffcb05, #f4c306, #2a75bb, #3c5aa6);
    max-width: 600px;
    margin: 0 auto;
    border-radius: 15px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    h1 {
      font-family: 'Pokemon Solid', sans-serif;
      color: #2a75bb;
    }
    .data-container {
      width: 225px;
      margin: 0.3rem;
      padding: 0.3rem;
    }
  }
}
</style>
