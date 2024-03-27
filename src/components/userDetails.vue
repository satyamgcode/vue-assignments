<script setup>
import { useUserStore } from '../store/useUserStore'

const userStore = useUserStore()
</script>

<template>
    <h3> user "{{ userStore.data?.username }}" is successfully loged in</h3>
</template>

<style scoped></style>