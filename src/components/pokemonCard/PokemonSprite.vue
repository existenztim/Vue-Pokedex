<script setup lang="ts">
const { pokemon } = defineProps(['pokemon']);
</script>

<template>
  <div class="pokemon-sprite">
    <img :src="pokemon.sprites.front_default" :alt="`A front picture of ${pokemon.name}`" />
    <!--<button>More images</button> work in progress-->
  </div>
</template>

<style scoped lang="scss">
img {
  margin: 1rem;
  width: 200px;
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(31, 68, 102, 1) 100%);
  border: 5px solid #c7a008;
  border-radius: 5px;
}
</style>
