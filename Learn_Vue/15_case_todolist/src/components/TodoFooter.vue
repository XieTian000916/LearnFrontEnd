<template>
  <div class="todo-footer" v-show="total">
    <!-- 无待办事项时将不显示footer中的统计功能和清除按钮 -->
    <label>
      <input type="checkbox" v-model="checkAll" />
    </label>
    <span>
      <span>已完成{{ doneCount }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos", "checkAllTodo", "clearAllTodo"],
  computed: {
    // 计算全部的待办数量
    total() {
      return this.todos.length;
    },
    doneCount() {
      /* return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0); */
      // 使用reduce数组方法进行条件统计
      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    checkAll: {
      get() {
        return this.doneCount === this.total && this.total > 0;
      },
      set(val) {
        this.checkAllTodo(val);
      },
    },
  },
  methods: {
    // 清除全部待办
    clearAll() {
      this.clearAllTodo();
    },
  },
};
</script>

<style scoped>
/* footer */
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>