<template>
  <ul class="todo-main">
    <todo-item v-for="todoObj in todos" v-bind:key="todoObj.id" :todo="todoObj"/>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: "TodoMain",
  components:{
    TodoItem
  },
  props:['todos']
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>