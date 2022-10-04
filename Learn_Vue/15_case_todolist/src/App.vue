<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-warp">
        <todo-header @addTodo="addTodo" />
        <todo-main :todos="todos" />
        <todo-footer
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
// import { nanoid } from "nanoid";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加待办
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 勾选或取消
    checkboxChange(id) {
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除按钮功能
    deleteTodo(id) {
      if (confirm("确认删除该事项？")) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      }
    },
    // 全选或全不选
    checkAllTodo(val) {
      this.todos.forEach((todo) => (todo.done = val));
    },
    // 清除已完成事项
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        // 过滤出done值为非真的，即未完成项
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true, // 开启深度监视以监测存储的对象的内部变化
      handler(val) {
        localStorage.setItem("todos", JSON.stringify(val));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkboxChange", this.checkboxChange);
    this.$bus.$on("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off(["checkboxChange", "deleteTodo"]);
  },
};
</script>

<style>
/* base */
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-warp {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
