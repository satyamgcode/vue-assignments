import { createApp } from "vue";
import "./style.css";
import App from "./app.vue";

import { router } from "./routes";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
