<script setup>
import { onMounted } from 'vue';
import test from './components/test.vue'
import { ref } from 'vue'
const msg = ref("write here")
const clearInput = (value) => {
  msg.value = ""
}
const capitalize = () => {
  msg.value = msg.value.toUpperCase()
}
</script>

<template>
  <div>
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />

  </div>
  <test msg="This is assignment-3" />
  <h2>Hello:{{ msg }} </h2>

  <input type="text" v-model="msg">
  <button @click="clearInput"> Clear</button>
  <button @click="capitalize"> Capitalize</button>

</template>

<style scoped>
button {
  margin: 10px;
}
</style>
