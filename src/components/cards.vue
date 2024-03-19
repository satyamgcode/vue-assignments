<script setup>
import { ref, reactive } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <div class="card" style="max-width: 18rem;width:100%;min-width: 14rem;">
    <slot name="image">
      <img src="../assets/seen.jpg" class="card-img-top" alt="loading..">
    </slot>

    <div class="card-body">
      <h5 class="card-title">
        <slot name="title">
          Card title
        </slot>
      </h5>
      <p class="card-text">
        <slot name="description">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </slot>
      </p>
      <slot name="footer">
        <button class="cards-btn">Go somewhere</button>
      </slot>
    </div>
  </div>

</template>

<style>
.cards {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.card-img-top {
  min-height: 12rem;
  margin-bottom: 1rem;
  background-color: gray;
  height: 11rem;
  width: 100%;
}

.card {
  margin-top: 2rem;
  border: 1px solid gray;
  height: 26rem;
}

.cards-btn {
  background: rgb(76, 119, 170);
  height: 2rem;
  border: none;
  border-radius: 1rem;
}

.card-body {
  padding: 1rem;
}
</style>
