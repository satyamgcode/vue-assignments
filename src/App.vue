<script setup>
import cards from './components/cards.vue'
</script>


<template>

  <div class="container">
    <div>
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </div>
    <h1>Assignment cards layout</h1>
    <div class="card_temp">
      <cards msg="assigment Cards Template " />
      <cards>
        <template #title>New Title</template>
        <template #description>another layout cards two using slots </template>
      </cards>
      <cards>
        <template header:title>New title 3</template>
        <template #description>thisnis the another template 3 using slots</template>
      </cards>

    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card_temp {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  place-items: center;
}

@media (max-width:800px) {
  .card_temp {
    grid-template-columns: repeat(2, 3fr);
    place-items: center;
  }
}

@media (max-width:650px) {
  .card_temp {
    grid-template-columns: repeat(1, 3fr);
    place-items: center;
  }
}
</style>
