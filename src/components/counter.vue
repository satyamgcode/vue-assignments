<script setup>
import { onUnmounted, ref } from 'vue';

const count = ref(0)

let io;
const start = () => {
    clearInterval(io)
    io = setInterval(() => {
        count.value++;
    }, 100)
}

function reset() {
    count.value = 0
    // minute.value = 0
    clearInterval(io)
}

function stopTimer() {
    clearInterval(io)
}

onUnmounted(() => {
    clearInterval(io)
})

const format = () => {
    if (count.value <= 60) {
        return Math.floor(count.value / 60) + " :  " + (count.value % 60)
    }

    if (count.value <= 3600) {
        return Math.floor(count.value / 60) + " :" + (count.value % 60)
    }
}

// event
defineEmits(['remove'])
</script>

<template>
    <div class="timertemp">
        <h2>count: {{ format() }}</h2>
        <button style="margin-left: 5rem;" @click="start"> Start</button>
        <button @click="reset">Reset</button>
        <button @click="stopTimer">Stop</button>
        <button @click="$emit('remove')" style="margin-left: 2rem;"> Delete</button>
    </div>
</template>

<style scoped>
.timertemp {
    display: flex;
    margin-left: 0.9rem;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
}
</style>