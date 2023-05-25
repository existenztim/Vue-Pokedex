<script setup lang="ts">
const { pokemon } = defineProps(['pokemon']);

let height = 0.1 * pokemon.height;
let weight = 0.1 * pokemon.weight;
height = parseFloat(height.toFixed(2));
weight = parseFloat(weight.toFixed(2));
</script>

<template>
  <div class="pokemon-size">
    <p>Height : {{ height }} meters.</p>
    <p>weight : {{ weight }} kg.</p>
  </div>
</template>
