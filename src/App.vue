<script setup>
import { onMounted } from 'vue';
import test from './components/test.vue'
import { ref } from 'vue'
const msg = ref("write here")

</script>

<template>
  <div>
    <img src="/vite.svg" class="logo" alt="Vite logo" />

    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />

  </div>
  <test msg="This is assignment-2" />
  <h2>Hello:{{ msg }} </h2>

  <input type="text" v-model="msg">

</template>

<style scoped></style>
