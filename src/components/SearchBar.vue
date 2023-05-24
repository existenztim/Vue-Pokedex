<script setup lang="ts">
//this component is not in use yet
import { ref, watch } from 'vue';
const search = ref('');
watch(search, () => {
  console.log(search);
});
</script>

<template>
  <div class="search-container">
    <input v-model.trim="search" type="text" placeholder="Find what you look for..." />
  </div>
</template>

<style scoped lang="scss">
.search-container {
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: flex;
  input {
    border: none;
    background-color: rgba($color: #616161, $alpha: 0.5);
    padding: 0.5rem;
    border-radius: 5px;
  }
}
</style>
