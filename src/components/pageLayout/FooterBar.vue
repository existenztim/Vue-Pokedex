<script setup lang="ts"></script>

<template>
  <div class="footer-parent">
    <div class="footer-container">
      <p>
        Created with
        <a href="https://vuejs.org/" aria-label="Go to Vue's official page" target="_blank" rel="noopener noreferrer"
          >Vue
        </a>
      </p>
      <p>
        And
        <a href="https://pokeapi.co/" aria-label="Go to Vue's official page" target="_blank" rel="noopener noreferrer"
          >PokéApi</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-parent {
  .footer-container {
    position: fixed;
    display: flex;
    justify-content: center;
    background-color: #2a75bb;
    width: 100%;
    bottom: 0;
    right: 0;
    margin-bottom: 0;
    margin-top: 1rem;
    padding: 1rem;

    p {
      font-weight: bold;
    }
    a {
      color: gold;
    }
  }
}
</style>
