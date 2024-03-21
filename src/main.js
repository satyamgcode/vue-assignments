import { createApp } from "vue";
import { createPinia } from "pinia";
import "../src/style.css";
// import App from "./App.vue";
import App from "./App.vue";

createApp(App).use(createPinia()).mount("#app");
