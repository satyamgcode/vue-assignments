<template>
    <div>
        <form @submit.prevent="addItemAndClear">
            <input v-model="todo" type="text" />
            <button class="btnInput" style="margin-left: 1rem; margin-top: 4rem;">Add</button>
            <div class="alert-div">
                <div v-show="store.showAlert" class="alert">
                    Please type something...
                </div>
            </div>
        </form>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '../store/useTodoListStore';

const todo = ref("");
const store = useTodoListStore();

function addItemAndClear() {
    if (todo.value.length === 0) {
        store.inputAlert();
        return;
    }
    store.addTodo(todo.value);
    todo.value = "";
}

</script>

<style scoped>
input {
    height: 3rem;
    width: 20rem;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem;
    padding-left: 1rem;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

.btnInput {
    height: 3rem;
    width: 6rem;
    color: white;
    background-color: rgb(72, 68, 68);
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
}
</style>