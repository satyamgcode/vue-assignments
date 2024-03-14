<script setup>
import { ref } from 'vue'
defineProps({
  msg: String,
})
const red = ref(false)
const blue = ref(false)

const getStyleObject = () => {
  return { color: red.value && blue.value ? 'purple' : red.value ? 'red' : blue.value ? 'blue' : "" };
}
// to create a dropdown to change the color



</script>
<template>
  <div class="container">
    <!-- to change color by using checkbox -->
    <div>
      <h1 :style="getStyleObject()">{{ msg }}</h1>
      <input type="checkbox" id="red" name="red" v-model="red">
      <label for="red"> Red</label>
      <br>
      <input type="checkbox" id="blue" name="blue" v-model="blue">
      <label for="blue"> Blue</label>
    </div>
    <!-- to chnage color by using a dropdowm menu  -->
    <div class="dropdown">
      <h2>Im colorchanger</h2>
      <select name="change_colors" id="color" value="select_color">
        <option value="red"> select a color</option>
        <option value="red"> orange</option>
        <option value="red"> yellow</option>
        <option value="red"> green</option>
      </select>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
}

.dropdown {
  margin: 2.5rem;
  margin-left: 10.5rem;
}
</style>