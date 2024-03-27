import { createWebHistory, createRouter } from "vue-router";

import loginForm from "./components/loginForm.vue";
import homePage from "./components/homePage.vue";
import userDetails from "./components/userDetails.vue";
import { useUserStore } from "./store/useUserStore";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: homePage,
    },
    {
      path: "/login",
      component: loginForm,
    },
    {
      path: "/loginDetails",
      component: userDetails,
    },
  ],
});

router.beforeEach((to) => {
  const userStore = useUserStore();

  if (userStore.data == null && to.path == "/loginDetails") {
    return { path: "/login" };
  }

  return true;
});
