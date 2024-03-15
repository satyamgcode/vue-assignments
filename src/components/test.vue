<!-- sigle input form takes input which will reflect in list after clicking sublit button -->

<script setup>

import { reactive, ref } from 'vue';
defineProps({
  msg: String
})

//to add items in an list after clicking on submit btn
const items = reactive([]);
const newItem = ref('');
const editIndex = ref(-1)

function addItem() {
  const value = newItem.value.trim();
  if (!value) {
    return
  }

  if (editIndex.value == -1) {
    items.push(value)
  } else {
    items[editIndex.value] = value;
    editIndex.value = -1;
  }

  newItem.value = '';
  // if (newItem.value.trim()) {
  //   items.value.unshift(newItem.value);
  //   newItem.value = ''; // Clear the input after adding
  // }
}
function removeListItem(index) {
  items.splice(index, 1)
}
function editListItem(index) {
  editIndex.value = index;
  newItem.value = items[index];
}
</script>

<template>
  <!--  form in which whatever we submit reflect in the list -->
  <h1>{{ msg }}</h1>
  <div class="addlist">
    <form action="#">
      <label for="items"> Enter Items: </label>
      <input type="text" id="items" v-model="newItem" />
      <button @click="addItem">
        {{ editIndex == -1 ? "Add" : "Update" }}
      </button>
    </form>
    <div class="list-container">
      <ul>
        <li v-for="(item, index) in items" :key="index"><br>
          <div>{{ item }}</div>
          <button @click="removeListItem(index)"> Delete</button>
          <button class="edit" @click="editListItem(index)"> EDIT</button>
        </li>
      </ul>

    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

li div {
  background-color: #f4f4f4;
  color: black;
  border: 1px solid black;
  min-width: 200px;
  padding: 0.6rem;
  font-size: 0.9rem;
}

li div:hover {
  background-color: skyblue;
}

.addlist {
  margin: 2rem;
}

/* .list-container {
  max-height: 10rem;
  /* overflow: auto; */
/* } */

#delete {
  height: 1.5rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

/* .edit {
  margin: 0.5rem;
} */
</style>