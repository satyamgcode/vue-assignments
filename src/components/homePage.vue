<script setup>
import { useRouter } from 'vue-router';

defineProps({
    msg: String
})

const router = useRouter()

</script>

<template>

    <h1>{{ msg }}</h1>

</template>

<style>
li {
    list-style: none;
    color: white;
    padding: 2rem;
}

a.logo {
    text-decoration: none;
    color: white;
    font-size: 2rem;
    padding: 2rem;
}

.topnav {
    background-color: black;
    border: none;
    display: flex;
    height: 3rem;
    align-items: center;
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    justify-content: space-around;
}

.navlist {
    display: flex;
}

@media (max-widht:700px) {
    .topnav {
        width: 100%;
        height: 0rem;
        font-display: column;
        align-items: center;
    }

}

.btn {
    height: 2.5rem;
    width: 5rem;
    background: linear-gradient(orange, red);
    border-radius: 1rem;
    border: none;
}
</style>