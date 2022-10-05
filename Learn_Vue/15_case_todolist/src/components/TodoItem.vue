<template>
  <transition
    name="animate__animated animate__bounce"
    appear
    enter-active-class="animate__fadeInLeft"
    leave-active-class="animate__fadeOutRight"
  >
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="changeCheck(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handelBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
      <button
        class="btn btn-edit"
        v-show="!todo.isEdit"
        @click="handelEdit(todo)"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import "animate.css";
export default {
  name: "TodoItem",
  props: ["todo" /* "checkboxChange", "deleteTodo" */],
  methods: {
    changeCheck(id) {
      // this.checkboxChange(id);
      this.$bus.$emit("checkboxChange", id);
    },
    deleteItem(id) {
      // this.deleteTodo(id);
      this.$bus.$emit("deleteTodo", id);
    },
    handelEdit(todo) {
      if (todo.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    handelBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("内容不能为空！");
      this.$bus.$emit("changeTitle", todo.id, e.target.value);
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* item */
li {
  list-style: none;
  height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li::before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>