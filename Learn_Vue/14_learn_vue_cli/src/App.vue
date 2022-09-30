<template>
  <div id="app">
    <UsageOfRef />
    <hr />
    <UsageOfProps name="Zhangsan" :age="18" sex="male" />
    <hr />
    <UseMixin1 />
    <hr />
    <UseMixin2 />
    <hr />
    <h1>Usage Of Plugins</h1>
    <button @click="hello">test method import from plugins</button>
  </div>
</template>

<script>
// 引入组件
import UsageOfRef from "./components/UsageOfRef.vue";
import UsageOfProps from "./components/UsageOfProps.vue";
import UseMixin1 from "./components/UseMixin1.vue";
import UseMixin2 from "./components/UseMixin2.vue";

export default {
  name: "App",
  components: {
    UsageOfRef,
    UsageOfProps,
    UseMixin1,
    UseMixin2,
  },
};
</script>

<style>
</style>