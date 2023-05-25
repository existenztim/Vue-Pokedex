<script setup lang="ts"></script>
<template>
  <div class="error-container">
    <h3>Something went wrong with geting the requested data.😢</h3>
    <p>Check the console in the browser for more information or try again.</p>
  </div>
</template>

<style scoped lang="scss">
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  p,
  h3 {
    color: red;
  }
}
</style>
