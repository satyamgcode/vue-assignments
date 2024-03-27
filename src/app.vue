<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from './store/useUserStore'

const userStore = useUserStore()
const router = useRouter()

const onButtonClick = () => {
  if (userStore.data) {
    userStore.logout();
  }

  router.push('/login');
}
</script>

<template>
  <header class="topnav">
    <div class="navdown">
      <a href="#" class="logo">Layoout</a>
    </div>
    <div class="navlist">
      <li>About</li>
      <li>Services</li>
      <li>Contact</li>
    </div>
    <button class="btn" @click="onButtonClick">
      {{ userStore.data ? 'Logout' : 'Login' }}
    </button>

  </header>
  <router-view msg="Home page" />
</template>

<style scoped>
.vue {
  margin-bottom: 2.5rem;
}
</style>