<script setup lang="ts">
import type { IpokemonResponse } from "@/models/IpokemonResponse";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const pokemon = ref<IpokemonResponse>();
const route = useRoute();
const pokeUrl = route.params.pokemon;

onMounted(() => {
  try {
    axios.get<IpokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${pokeUrl}`).then((response) => {
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
    });
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <div v-if="pokemon" class="pokemon-card" :key="pokemon.id.toString()">
    <h1>{{ pokemon.name }}</h1>
    <div>
      <img :src="pokemon.sprites.front_default" :alt="`A front picture of ${pokemon.name}`" />
      <button>More images</button>
    </div>
    <p>Height : {{ 0.1 * pokemon.height }} meters.</p>
    <p>weight : {{ 0.1 * pokemon.weight }} kg.</p>
    <div v-for="stat in pokemon.stats">
      <p>{{ stat.stat.name }} : {{ stat.base_stat }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pokemon-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
  }
}
</style>
