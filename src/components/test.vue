<script setup>
import { reactive, ref } from 'vue'

defineProps({
  msg: String,
})

const listItemsArray = reactive([])

const fname = ref('')
const lname = ref('')
const address = ref('')
// const editIndex = ref(-1)


function addItems() {
  if (!fname.value || !lname.value || !address.value) {
    return alert('field cannot be empty')
  }

  listItemsArray.unshift({
    fname: fname.value,
    lname: lname.value,
    address: address.value,
    color: ''
  })

  fname.value = lname.value = address.value = ' '
}


const deleteItem = (index) => {
  listItemsArray.splice(index, 1)
}

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

  <button @click="addItems">ADD</button>
  <div class="inputList">
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in  listItemsArray " :key="index" :style="{ 'color': user.color }">
          <td>{{ user.fname }}</td>
          <td>{{ user.lname }}</td>
          <td>{{ user.address }}</td>
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
