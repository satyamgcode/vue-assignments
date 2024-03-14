<script setup>

// import { onMounted } from 'vue';
import { ref, reactive, computed } from 'vue'

const msg = ref("write here")
const date = ref(new Date())
// using computed properties
const computed_date = computed(() => {
  return date
})

const clearInput = (value) => {
  msg.value = " ";
  // to update the time while giving new input
  date.value = new Date()

}
const capitalize = () => {
  msg.value = msg.value.toUpperCase()
}
// const getStyleObject = () => {
//   return { color: red.value && blue.value ? 'purple' : red.value ? 'red' : blue.value ? 'blue' : "" };
// }
import test from './components/test.vue'

</script>

<template>
  <div>
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />

  </div>
  <h2>Hello:{{ msg }} </h2>
  <!-- date using ref and change when clear-->
  <h2>updation time: {{ date }}</h2><br>

  <!-- display date using computed property also change when clear input -->
  <h3> Computed time: {{ computed_date }}</h3>

  <input type="text" v-model="msg">
  <button @click="clearInput"> Clear</button>
  <!-- <button @dblclick="updatetime">updatetime</button> -->
  <button @click="capitalize"> Capitalize</button>
  <test msg="This is assignment-4" />

</template>

<style scoped>
button {
  margin: 10px;
}
</style>
