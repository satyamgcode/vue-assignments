<script setup>
import { reactive, ref, computed } from 'vue'

defineProps({
  msg: String,
})

const listItemsArray = reactive([])

const fname = ref('')
const lname = ref('')
const address = ref('')
const DOB = ref('')


let pageSize = 5
const currentPage = ref(0)


function addItems() {
  if (!fname.value || !lname.value || !address.value || !DOB.value) {
    return alert('field cannot be empty')
  }

  listItemsArray.push({
    fname: fname.value,
    lname: lname.value,
    address: address.value,
    DOB: DOB.value,
    color: '',
  })

  fname.value = lname.value = address.value = DOB.value = ''
}


const deleteItem = (index) => {
  listItemsArray.splice(index, 1)
}

const showNextButton = computed(() => {
  // Check if there are more items after the current page
  return (currentPage.value + 1) * pageSize < listItemsArray.length;
})

const showPreviousButton = computed(() => {
  // Check if we're not on the first page
  return currentPage.value > 0;
})

const nextPage = () => {
  // Ensure we don't go beyond the last page
  currentPage.value = Math.min(currentPage.value + 1, Math.ceil(listItemsArray.length / pageSize) - 1);
}

const previousPage = () => {
  // Ensure we don't go below the first page
  currentPage.value = Math.max(currentPage.value - 1, 0);
}

const displayedItems = computed(() => {
  const startIndex = currentPage.value * pageSize;
  // Use listItemsArray directly for calculation

  return listItemsArray
    .sort((a, b) => new Date(a.DOB) - new Date(b.DOB)) // Sort based on DOB
    .slice(startIndex, startIndex + pageSize);
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>
    Customer details
  </h2>
  <label for="fistname">First name- </label>
  <input id="firstname" type="text" v-model="fname">

  <label for="lastname">Last name- </label>
  <input id="lastname" type="text" v-model="lname">

  <label for="address">address- </label>
  <input style="margin-right: 0.5rem;" id="address" type="text" v-model="address">

  <label for="date">DOB- </label>
  <input style="margin-right: 0.5rem;" id="date" type="date" v-model="DOB">

  <button @click="addItems">ADD</button>
  <div class="inputList">
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Address</th>
          <th>DOB</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in  displayedItems " :key="index" :style="{ 'color': user.color }">
          <td>{{ user.fname }}</td>
          <td>{{ user.lname }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.DOB }}</td>

          <td class="action">
            <button @click="deleteItem(index)">Delete</button>
            <select name="colors" id="color" class="select" v-model="user.color">
              <option value="red">red</option>
              <option value="yellow">yellow</option>
              <option value="blue">blue</option>
              <option value="Green">Green</option>
            </select>
          </td>
        </tr>

      </tbody>
    </table>
    <div>
      <button @click="previousPage" :disabled="!showPreviousButton">
        Previous
      </button>
      <span>Page {{ currentPage + 1 }}</span>
      <button @click="nextPage" :disabled="!showNextButton">Next</button>
    </div>
  </div>
</template>

<style scoped>
label {
  margin-left: 2rem;
}

input {
  padding: 0.6rem 0.8rem;
}

table {
  width: 100%;
  border: 1px solid white;
  border-collapse: collapse;
  margin: 1.5rem;
}

table tr,
table td,
table th {
  border: 1px solid white;
}

.select {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
