<script setup lang="ts">
const { pokemon } = defineProps(['pokemon']);
</script>

<template>
  <div v-for="stat in pokemon.stats" class="pokemon-stat">
    <p :class="stat.stat.name">{{ stat.stat.name }} :</p>
    <p>{{ stat.base_stat }}</p>
  </div>
</template>

<style scoped lang="scss">
.pokemon-stat {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 0.5rem;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: rgba($color: #a8a77a, $alpha: 0.3);

  p {
    font-weight: bold;
    padding: 0.1rem;
  }

  .hp {
    color: #ff0000;
    background-color: rgba($color: #000000, $alpha: 0.6);
    border-radius: 5px;
    border: 1px solid #ff0000;
  }
  .attack {
    color: #f08030;
    background-color: rgba($color: #000000, $alpha: 0.6);
    border-radius: 5px;
    border: 1px solid #f08030;
  }
  .defense {
    color: #f8d030;
    background-color: rgba($color: #000000, $alpha: 0.6);
    border-radius: 5px;
    border: 1px solid #f8d030;
  }
  .speed {
    color: #f85888;
    background-color: rgba($color: #000000, $alpha: 0.6);
    border-radius: 5px;
    border: 1px solid #f85888;
  }
  .special-attack {
    color: #6890f0;
    background-color: rgba($color: #000000, $alpha: 0.6);
    border-radius: 5px;
    border: 1px solid #6890f0;
  }
  .special-defense {
    color: #78c850;
    background-color: rgba($color: #000000, $alpha: 0.6);
    border-radius: 5px;
    border: 1px solid #78c850;
  }
}
</style>
