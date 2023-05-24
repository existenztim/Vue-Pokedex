<script setup lang="ts">
import { ref, watch } from 'vue';
import regionData from '../data/mockedPokemon.json';
import RegionCard from '../components/RegionCard.vue';
import type { Iregion } from '../models/Iregion';

const regions = ref(regionData);
const search = ref('');
const checkRegions = ref(false);

watch(search, () => {
  regions.value = regionData.filter((region: Iregion) => region.name.toLowerCase().includes(search.value));
  regions.value.length > 0 ? (checkRegions.value = false) : (checkRegions.value = true);
});
</script>

<template>
  <div class="container">
    <header>
      <input v-model.trim="search" type="text" placeholder="Search category..." />
    </header>
    <p v-if="checkRegions">No matches 😢</p>

    <div class="options-container">
      <RegionCard v-for="region in regions" class="card" :key="region.id" :regionProp="region" />
    </div>
  </div>
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
