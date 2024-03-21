<template>
    <div v-for="todo in todoList" :key="todo.id" class="list">
        <div class="item">
            <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
            <div>
                <button @click="deleteTodo(todo.id)" class="x">&#10060;</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { deleteTodo } = store;

</script>

<style scoped>
.item {
    display: flex;
    margin-top: 0.5rem;
    justify-content: center;
}

div span {
    min-width: 8rem;
    font-size: 1.5rem;
}

.list {
    text-align: center;
}

button {
    border: none;
    background-color: none;
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
}
</style>