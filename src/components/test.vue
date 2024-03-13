<script setup>
import { ref } from 'vue'
defineProps({
  msg: String,
})
const red = ref(false)
const blue = ref(false)

const getStyleObject = () => {
  return { color: red.value && blue.value ? 'purple' : red.value ? 'red' : blue.value ? 'blue' : '' };
}

</script>
<template>
  <div>
    <h1 :style="getStyleObject()">{{ msg }}</h1>
    <input type="checkbox" id="red" name="red" v-model="red">
    <label for="red"> Red</label>
    <br>
    <input type="checkbox" id="blue" name="blue" v-model="blue">
    <label for="blue"> Blue</label>
  </div>
</template>
<style scoped></style>