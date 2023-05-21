<script setup lang="ts">
const { regionProp } = defineProps(["regionProp"]);
// if we only write regionProp without {} we would have to type varname.regionProp.img
</script>

<template>
  <RouterLink :to="`/region/${regionProp.name}`" class="card">
    <img :src="regionProp.img" :alt="`A layout image of the ${regionProp.name} region.`" />
    <div class="card-text">
      <h3>{{ regionProp.name.toUpperCase() }}</h3>
      <p>{{ regionProp.pokemons }} number of pokemons</p>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.card {
  width: 300px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba($color: #000000, $alpha: 0.8);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 20px rgba($color: #000000, $alpha: 0.9);
    transition: all 0.3s ease;
  }

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
</style>
