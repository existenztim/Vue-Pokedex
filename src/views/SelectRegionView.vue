<script setup lang="ts">
import { ref, watch } from 'vue';
import regionData from '../data/mockedPokemon.json';
import RegionCard from '../components/RegionCard.vue';
import type { Iregion } from '../models/Iregion';

const regions = ref(regionData);
const search = ref('');
const checkRegions = ref(false);

watch(search, () => {
  search.value = search.value.toLowerCase();
  regions.value = regionData.filter((region: Iregion) => region.name.toLowerCase().includes(search.value));
  regions.value.length > 0 ? (checkRegions.value = false) : (checkRegions.value = true);
});
</script>

<template>
  <section class="container">
    <div class="search-container">
      <input v-model.trim="search" type="text" placeholder="Find what you look for..." />
    </div>
    <p v-if="checkRegions" class="no-match">No matches 😢</p>

    <div class="options-container">
      <RegionCard v-for="region in regions" class="card" :key="region.id" :regionProp="region" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  color: gold;
  max-width: 1000px;
  margin: 0 auto;

  a {
    color: gold;
    text-decoration: none;
  }
  .search-container {
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
      color: #382d01;
      font-weight: bold;
      background-color: rgba($color: #2a75bb, $alpha: 0.5);
      padding: 0.5rem;
      border-radius: 5px;
    }
  }
  .no-match {
    background-color: #2a75bb;
    text-align: center;
    max-width: 200px;
    margin: 0 auto;
    border-radius: 5px;
    padding: 0.5rem;
  }
  .options-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }
}
</style>
