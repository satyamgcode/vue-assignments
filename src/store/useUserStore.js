import { defineStore } from "pinia";
import { onMounted, onUnmounted, ref, watch } from "vue";

const DEFAULT_KEY = "user_";
export const useUserStore = defineStore("userStore", () => {
  const data = ref(null);

  const signIn = (username, password) => {
    data.value = {
      username,
      password,
    };
  };

  const logout = () => {
    data.value = null;
  };

  onMounted(() => {
    let storage = window.localStorage.getItem(DEFAULT_KEY);
    if (storage) {
      data.value = JSON.parse(storage).value;
    }
  });
  onUnmounted(() => {
    alert("unmountretd");
  });

  watch(data, () => {
    window.localStorage.setItem(
      DEFAULT_KEY,
      JSON.stringify({ value: data.value })
    );
  });

  return { data, signIn, logout };
});
