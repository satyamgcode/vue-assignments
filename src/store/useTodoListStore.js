import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    id: 0,
    showAlert: false,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item: item, id: this.id++, completed: false });
    },
    deleteTodo(itemID) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });
    },
  },
});
