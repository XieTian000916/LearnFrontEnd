<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="在此输入待办事项名称，并按回车确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "TodoHeader",
  // props: ["addTodo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      if (this.title.trim()) {
        // 将用户输入的值包装成一个todo对象
        const todoObj = { id: nanoid(), title: this.title.trim(), done: false };
        // this.addTodo(todoObj);
        this.$emit("addTodo", todoObj);
        this.title = "";
      } else {
        alert("输入不能为空");
      }
    },
  },
};
</script>

<style scoped>
/* header */
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>