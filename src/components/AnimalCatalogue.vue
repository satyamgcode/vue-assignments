<script setup>
import Model from "./Model.vue";
import useAnimalStore from "../Stores/AnimalList";
import { ref } from "vue";

const show = ref(false);
// const remove = ref(true)

const animalStore = useAnimalStore();
const image = ref("");
const title = ref("");
const updateIndex = ref(-1);

defineProps({
    msg: String,
});

const onEdit = (index) => {
    const data = animalStore.list[index];
    show.value = true;
    title.value = data.title;
    updateIndex.value = index;
};

const onAddNewAnimal = () => {
    if (!image.value && updateIndex.value == -1) {
        alert("Please select an image.");
    } else if (!title.value) {
        alert("Please add title.");
    } else {
        if (updateIndex.value == -1) {
            animalStore.add(URL.createObjectURL(image.value), title.value);
        } else {
            animalStore.update(
                image.value
                    ? URL.createObjectURL(image.value)
                    : animalStore.list[updateIndex.value].image,
                title.value,
                updateIndex.value
            );
        }
        image.value = title.value = "";
        show.value = false;
        updateIndex.value = -1;
    }
};
</script>

<template>
    <!-- heading of the Asssessmet -->

    <div class="heading">
        <h1>{{ msg }}</h1>
    </div>

    <!--  form to Add the new Animal to the kingdom  -->

    <Model v-if="show">
        <div class="takeInput">
            <!-- button  to close the animal addinf form  -->
            <button class="close" @click="show = false">
                <svg width="21px" height="21px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                        fill="#0F0F0F" />
                </svg>
            </button>

            <!-- form -->
            <form action="#">
                <div class="items">
                    <label for="image"> Select a image :</label>
                    <input id="nameOfAnimal" type="file" style="margin: 1rem 1rem" accept="image/*"
                        @change="image = $event.target.files?.[0]" />
                    <br />
                    <label for="nameOfAnimal"> Animal name :</label>
                    <input type="text" id="nameOfAnimal" style="margin: 1rem 1rem" v-model="title" />
                </div>
                <button @click="onAddNewAnimal">
                    {{ updateIndex == -1 ? "Add" : "Update" }}
                </button>
            </form>
        </div>
    </Model>

    <div class="addMore">
        <button @click="show = true">Create</button>
    </div>

    <!-- animal catalogue card -->

    <div class="AnimalKingdom">
        <div class="animalCard" v-for="(animal, index) in animalStore.list" :key="animal.id">
            <button class="close" @click="animalStore.remove(index)">
                <svg width="21px" height="21px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                        fill="#0F0F0F" />
                </svg>
            </button>

            <!-- button to edit the image and title of the card -->

            <button class="edit" @click="onEdit(index)">
                <svg width="21px" height="21px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#000000" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <div class="image">
                <img :src="animal.image" :alt="animal.title" />
            </div>
            <div class="data">
                {{ animal.title }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.data {
    display: flex;
    padding-left: 1rem;
    align-items: center;
    max-height: 3rem;
    font-size: 1.3rem;
    padding-top: 0.2rem;
}

.animalCard {
    display: flex;
    flex-direction: column;
    height: 13rem;
    border: 1px solid gray;
    width: 100%;
    max-width: 16rem;
    border-radius: 10px;
    border-radius: 10px;
    margin: 1rem 0;
    background-color: white;
    position: relative;
}

.close {
    position: absolute;
    top: 11px;
    right: 12px;
    border-radius: 10px;
    height: 20px;
    width: 20px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    height: fit-content;
    width: 100%;
    max-width: 16rem;
    aspect-ratio: 1.6/1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.addMore {
    margin: 2rem 0;
}

.takeinput {
    position: relative;
}

.items {
    margin-bottom: 2.5rem;
    margin-top: 2rem;
}

.AnimalKingdom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
    gap: 1rem;
    width: 100%;
    place-items: center;
}

.edit {
    position: absolute;
    top: 169px;
    left: 225px;
    border-radius: 10px;
    height: 20px;
    width: 20px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
}

.edit:hover {
    border: none;
}

.heading {
    color: white;
}
</style>
