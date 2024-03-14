<!-- sigle input form takes input which will reflect in list after clicking sublit button -->

<script setup>

import { ref } from 'vue';

//to add items in an list after clicking on submit btn
const items = ref([]);
const newItem = ref('');

function addItem() {
    if (newItem.value.trim()) {
        items.value.unshift(newItem.value);
        newItem.value = ''; // Clear the input after adding
    }
}
</script>

<template>
    <!--  form in which whatever we submit reflect in the list -->
    <div class="addlist">
        <form action="#">
            <label for="items"> Enter Items: </label>
            <input type="text" id="items" v-model="newItem" />
            <button @click="addItem"> Submit</button>
        </form>
        <div class="list-container">
            <ul type="none">
                <li v-for="item in items">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
li {
    background-color: #f4f4f4;
    color: black;
    border: 1px solid black;
    width: 8.5rem;
    height: 1.5rem;
    overflow: scroll;
}

ul {
    align-items: center;
    box-sizing: border-box;
}

.addlist {
    margin: 2rem;
}

.list-container {
    max-height: 10rem;
    overflow: auto;
}

li:hover {
    background-color: skyblue;
}
</style>