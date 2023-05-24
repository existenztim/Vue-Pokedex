<script setup lang="ts">
const { pokemon } = defineProps(['pokemon']);
</script>

<template>
  <div v-for="stat in pokemon.stats" class="pokemon-stat">
    <p>{{ stat.stat.name }} :</p>
    <p>{{ stat.base_stat }}</p>
  </div>
</template>

<style scoped lang="scss">
.pokemon-stat {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
</style>
