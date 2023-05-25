<script setup lang="ts">
const { pokemon } = defineProps(['pokemon']);

let height = 0.1 * pokemon.height;
let weight = 0.1 * pokemon.weight;
height = parseFloat(height.toFixed(2));
weight = parseFloat(weight.toFixed(2));
</script>

<template>
  <div class="pokemon-size">
    <p>
      Height : <span>{{ height }} meters.</span>
    </p>
    <p>
      weight : <span>{{ weight }} kg.</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.pokemon-size {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: rgba($color: #96d9d6, $alpha: 0.3);

  p {
    font-weight: bold;
  }
}
</style>
