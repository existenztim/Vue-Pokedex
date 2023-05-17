<script setup lang="ts"></script>

<template>
  <div class="container">
    <header>
      <h1>Vue Quiz APP</h1>
      <input type="text" placeholder="Search category..." />
    </header>

    <div class="options-container">
      <div class="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2c/PlayStationConsole_bkg-transparent.png"
          alt=""
        />
        <div class="card-text">
          <h3>Playstation 1</h3>
          <p>15 questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  margin: 0 auto;

  header {
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    align-items: flex;

    h1 {
      font-weight: bold;
      margin-right: 2rem;
    }

    input {
      border: none;
      background-color: rgba($color: #616161, $alpha: 0.5);
      padding: 0.5rem;
      border-radius: 5px;
    }
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;

    .card {
      width: 300px;
      overflow: hidden;
      border-radius: 2%;
      box-shadow: 1px 1px 10px rgba($color: #000000, $alpha: 0.8);
      margin-bottom: 35px;
      margin-right: 20px;
      cursor: pointer;

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
  }
}
</style>
