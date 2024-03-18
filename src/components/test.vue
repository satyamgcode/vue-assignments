<script setup>
import { reactive, ref } from 'vue'
import counter from './counter.vue'

defineProps({
  msg: String,
})

// const count = ref(0)
const timerItems = reactive([])

// function startTimer() {

// }

// let io;
// const start = () => {
//   clearInterval(io)
//   io = setInterval(() => {
//     count.value = count.value + 1
//   }, 1000)

// }
// function reset() {
//   count.value = 0
//   clearInterval(io)
// }
// function stopTimer() {
//   clearInterval(io)

// }

const removeTimer = (index) => {
  console.log(index);

  timerItems.splice(index, 1)
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="timer">
    <button @click="timerItems.unshift(Math.random())">Timer</button>
    <counter :key="_" v-for="(_, index) in timerItems" @remove="removeTimer(index)" />
  </div>
</template>

<style scoped>
/* .timertemp {
  display: flex;
  margin-left: 0.9rem;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
} */

button {
  height: 2rem;
  margin-left: 1rem;
}
</style>
