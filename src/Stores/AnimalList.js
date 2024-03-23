import { defineStore } from "pinia";
import { reactive } from "vue";

import Image1 from "../assets/WallpaperDog-20514264.jpg";
import Image2 from "../assets/wp7164260-ben-10-4k-wallpapers.jpg";
import Image3 from "../assets/seen.jpg";
import Image4 from "../assets/michael-dziedzic-gEN5Btvf2Eg-unsplash.jpg";

const dummData = [
  {
    image: Image1,
    title: "Sample title1",
  },
  {
    image: Image2,
    title: "Sample title2",
  },
  {
    image: Image3,
    title: "Sample title3",
  },
  {
    image: Image4,
    title: "Sample title4",
  },
];

export default defineStore("animalList", () => {
  const list = reactive(dummData);

  const addItem = (image, title) => {
    list.push({
      id: Math.random(),
      image,
      title,
    });
  };

  const removeItem = (index) => {
    list.splice(index, 1);
  };

  const updateItem = (image, title, index) => {
    list[index] = {
      title,
      image,
      id: list[index].id,
    };
  };

  return { list, remove: removeItem, add: addItem, update: updateItem };
});
