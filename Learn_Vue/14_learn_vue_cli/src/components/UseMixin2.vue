<template>
  <div>
    <h1>Mixin 2</h1>
    <h3>Name:{{ name }}</h3>
    <h3>Age:{{ age }}</h3>
    <button @click="showInfo">click to see info</button>
  </div>
</template>

<script>
// 在此引入混入
import { hunru } from "../mixin";

export default {
  data() {
    return {
      name: "Lihau",
      age: 28,
    };
  },
  // 在此进行混入
  mixins: [hunru],
};

// 在main.js中进行全局混入
</script>

<style>
</style>