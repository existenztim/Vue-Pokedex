<script setup lang="ts">
const { pokemon } = defineProps(['pokemon']);
</script>

<template>
  <div class="pokemon-size">
    <p>Height : {{ 0.1 * pokemon.height }} meters.</p>
    <p>weight : {{ 0.1 * pokemon.weight }} kg.</p>
  </div>
</template>
