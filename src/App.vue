<script setup lang="ts">
import { ref, watch } from "vue";
import r from "./data/quiz.json";
import axios from "axios";

const fetchPokemon = async () => {
  axios.get("https://pokeapi.co/api/v2/region/").then((response) => {
    console.log(response.data.results);
  });
};
const regions = ref(r);
const search = ref("");
const checkRegions = ref(false);

watch(search, () => {
  regions.value = r.filter((region) => region.name.toLowerCase().includes(search.value));
  if (regions.value.length > 0) {
    checkRegions.value = false;
  } else {
    checkRegions.value = true;
  }
});

fetchPokemon();
</script>

<template>
  <div class="container">
    <header>
      <h1>Vue Quiz APP</h1>
      <input v-model.trim="search" type="text" placeholder="Search category..." />
    </header>
    <button @click="fetchPokemon">tryck</button>
    <p v-if="checkRegions">No matches 😢</p>
    <div class="options-container">
      <div v-for="region in regions" class="card" :key="region.id">
        <img :src="region.img" :alt="`an overlay image of the pokemon region ${region.name}`" />
        <div class="card-text">
          <h3>{{ region.name }}</h3>
          <p>{{ region.url }} questions</p>
        </div>
      </div>
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

    .card {
      width: 300px;
      overflow: hidden;
      border-radius: 2%;
      box-shadow: 1px 1px 10px rgba($color: #000000, $alpha: 0.8);
      margin-bottom: 35px;
      margin-right: 20px;
      cursor: pointer;

      img {
        width: 100%;
        height: 190px;
        margin: 0;
      }
      .card-text {
        padding: 0 0.25rem;

        h3 {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
