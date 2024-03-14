<script setup>
import { ref } from 'vue'
defineProps({
  msg: String,
})
const red = ref(false)
const blue = ref(false)

// to create a dropdown to change the color
const color = ref('')
//over


const getStyleObject = () => {
  return { color: red.value && blue.value ? 'purple' : red.value ? 'red' : blue.value ? 'blue' : "" };
}


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
      <h2 :style="{ color }">Im colorchanger</h2>
      <select name="change_colors" id="color" value="select_color" v-model="color">
        <option value="select" disabled> select a color</option>
        <option value="red"> red</option>
        <option value="orange"> orange</option>
        <option value="yellow"> yellow</option>
        <option value="green"> green</option>
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