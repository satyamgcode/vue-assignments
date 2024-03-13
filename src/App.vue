<script setup>

// import { onMounted } from 'vue';
import test from './components/test.vue'
import { ref, reactive } from 'vue'
const msg = ref("write here")
const date = ref(new Date())
const clearInput = (value) => {
  msg.value = "";
  date.value = new Date()
}
const capitalize = () => {
  msg.value = msg.value.toUpperCase()
}

</script>

<template>
  <div>
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />

  </div>
  <test msg="This is assignment-4" />
  <h2>Hello:{{ msg }} </h2>
  <h2>updation time: {{ date }}</h2>
  <input type="text" v-model="msg">
  <button @click="clearInput"> Clear</button>
  <!-- <button @dblclick="updatetime">updatetime</button> -->
  <button @click="capitalize"> Capitalize</button>

</template>

<style scoped>
button {
  margin: 10px;
}
</style>
