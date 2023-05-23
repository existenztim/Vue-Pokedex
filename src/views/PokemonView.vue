<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from "vue-router";

const pokemon = ref("");
const route = useRoute();
const pokeUrl = route.params.pokemon;

onMounted(() => {
    try {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeUrl}`).then((response) => {
        
        //temporare solution before interface
        pokemon.value = {
         name: response.data.name,
         img : response.data.sprites.front_default
        };
        console.log("response", response.data);
      });
    } catch (err) {
      console.log(err);
    }
  
});
</script>

<template>
    <div class="pokemon-card">
        <h1>{{pokemon.name}}</h1>
        <img :src="pokemon.img">
    </div>
</template>

<style scoped lang="scss">
    .pokemon-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 200px;
        }
    }
</style>