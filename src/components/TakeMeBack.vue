<script setup lang="ts">
const { view } = defineProps(['view']);
</script>

<template>
  <div v-if="view">
    <RouterLink :to="`/region/${view}`">
      <a class="back-to-list">Return to the list.</a>
    </RouterLink>
  </div>
  <div v-else>
    <RouterLink to="/">
      <a class="back-to-list">Return home.</a>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.back-to-list {
  color: #382d01;
  font-weight: bold;
  background-color: rgba($color: #2a75bb, $alpha: 0.5);
  padding: 0.5rem;
  border-radius: 5px;
  position: fixed;
  top: 10px;
  right: 10px;
  color: gold;
  border: 1px solid gold;
}
</style>
