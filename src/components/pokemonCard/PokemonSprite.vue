<script setup lang="ts">
const { pokemon } = defineProps(["pokemon"]);
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
  background-color: azure;
  border-radius: 5px;
}
</style>
