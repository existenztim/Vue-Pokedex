<script setup lang="ts">
import { ref, watch } from "vue";
import r from "../data/quiz.json";
import axios from "axios";
import RegionCard from "../components/regionCard.vue";
import type { Region } from "../models/regionsModel";

const fetchPokemon = async () => {
  await axios.get("https://pokeapi.co/api/v2/region/").then((response) => {
    console.log(response.data.results);
  });
};

const regions = ref(r);
const search = ref("");
const checkRegions = ref(false);

watch(search, () => {
  regions.value = r.filter((region: Region) => region.name.toLowerCase().includes(search.value));
  regions.value.length > 0 ? (checkRegions.value = false) : (checkRegions.value = true);
});

//fetchPokemon();
</script>

<template>
  <div class="container">
    <header>
      <input v-model.trim="search" type="text" placeholder="Search category..." />
    </header>
    <button @click="fetchPokemon">tryck för att testa fetch</button>
    <p v-if="checkRegions">No matches 😢</p>

    <div class="options-container">
      <RegionCard
        v-for="region in regions"
        class="card"
        :key="region.id"
        :regionProp="region"
      /><!--regionProp is a prop to pass data, it can be named anything-->
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  margin: 0 auto;

  header {
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    align-items: flex;

    h1 {
      font-weight: bold;
      margin-right: 2rem;
    }

    input {
      border: none;
      background-color: rgba($color: #616161, $alpha: 0.5);
      padding: 0.5rem;
      border-radius: 5px;
    }
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
}
</style>
