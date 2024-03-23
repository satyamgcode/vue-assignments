<template>
    <div class="model">
        <div class="model_dailog">
            <slot>
            </slot>
        </div>

    </div>
</template>

<style scoped>
.model {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100;
}

.model_dailog {
    padding: 1rem;
    background-color: #fff;
    position: relative;
}
</style>