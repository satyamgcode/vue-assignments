<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/useUserStore'


const router = useRouter();
const userStore = useUserStore()

const username = ref('')
const password = ref('')

const onFormSubmit = () => {
    if (!username.value || !password.value) {
        alert("Please enter credentials.");
    } else {
        userStore.signIn(username.value, password.value);
        router.push("/loginDetails");
    }
};
</script>


<template>
    <form action="#" @submit.prevent="onFormSubmit">
        <div class="form-container">
            <label for="username">Username</label>
            <input type="text" name="user" id="username" v-model="username" />
            <label for="password">Password</label>
            <input type="password" name="pass" id="password" v-model="password" />
            <button class="btn" type="submit">
                Log in
            </button>
        </div>
    </form>


</template>

<style scoped>
/* Styles for the form container */
.form-container {
    width: 19rem;
    margin: 0 auto;
    padding: 1.5rem;
    background-color: #f9f9f9;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Styles for labels */
label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
}

/* Styles for inputs */
input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    place-content: center;
}

/* Styles for the login button */
.btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    border-radius: 2rem;
}
</style>
