<template>
  <div>
    <h1>Custom Events In Vue</h1>
    <button @click="sendId">click to see ID</button> &nbsp;
    <button @click="unbind">click to unbind custom event</button>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "CustomEventsInVue",
  data() {
    return {
      id: nanoid(),
    };
  },
  methods: {
    sendId() {
      // 触发该组件身上的zidingyi自定义事件
      this.$emit("zidingyi", this.id);
    },
    unbind() {
      this.$off("zidingyi"); // 单个事件解绑
      // this.$off(['事件名1','事件名2',...]) // 多个事件解绑
      // this.$off() // 解绑所有事件
      alert("事件已解绑");
    },
  },
};
</script>

<style>
</style>