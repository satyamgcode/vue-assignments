<template>
    <div class="todo-app">
        <h1 style="margin-bottom: 3rem;"> assignment- To do list using Pinia</h1>
        <h1>To Do List</h1>
        <TodoForm />
        <TodoList />
    </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
</script>

<style scoped>
.todo-app {
    text-align: center;
    background-color: rgb(224, 219, 219);
    height: 100%;
    min-height: 100vh;
    padding-top: 5rem;
}

h1 {
    font-size: 3rem;
}
</style>