<script setup>

defineProps({
    msg: String,
})
const message = (name) => {
    return name;
}


</script>
<template>
    {{ msg }}
    <h1> greet: {{ message("hey manisha") }}</h1>

</template>
<style scoped></style>