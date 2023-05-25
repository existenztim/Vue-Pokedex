<script setup lang="ts">
const { pokemon } = defineProps(['pokemon']);
</script>

<template>
  <div class="pokemon-type">
    <p>Types:</p>
    <div v-for="(element, index) in pokemon.types">
      <p :class="element.type.name">
        {{ index + 1 }}: <span>{{ element.type.name }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pokemon-type {
  display: flex;
  padding: 0.5rem;
  gap: 0.3rem;
  background-color: rgba($color: #fff, $alpha: 0.3);
  .normal span {
    color: #a8a77a;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #a8a77a;
  }
  .fighting span {
    color: #c22e28;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #c22e28;
  }
  .flying span {
    color: #a98ff3;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #a98ff3;
  }
  .poison span {
    color: #a33ea1;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #a33ea1;
  }
  .ground span {
    color: #e2bf65;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #e2bf65;
  }
  .rock span {
    color: #b6a136;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #b6a136;
  }
  .bug span {
    color: #a6b91a;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #a6b91a;
  }
  .ghost span {
    color: #735797;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #735797;
  }
  .fire span {
    color: #ee8130;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #ee8130;
  }
  .water span {
    color: #6390f0;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #6390f0;
  }

  .grass span {
    color: #7ac74c;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #7ac74c;
  }

  .electric span {
    color: #f7d02c;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #f7d02c;
  }

  .psychic span {
    color: #f95587;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #f95587;
  }
  .ice span {
    color: #96d9d6;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #96d9d6;
  }
  .dragon span {
    color: #6f35fc;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #6f35fc;
  }
  .dark span {
    color: #705746;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #705746;
  }
  .steel span {
    color: #b7b7ce;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #b7b7ce;
  }
  .fairy span {
    color: #d685ad;
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #d685ad;
  }
}
</style>
