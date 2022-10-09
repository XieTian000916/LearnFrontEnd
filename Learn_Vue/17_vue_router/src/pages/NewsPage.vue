<template>
  <ul>
    <li :style="{ opacity }">vueRouter中的生命周期钩子</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "NewsPage",
  data() {
    return {
      opacity: 1,
    };
  },
  beforeDestroy() {
    console.log("News component will be destroyed");
  },
  activated() {
    // 展示组件时调用
    console.log("news component actived");
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 20);
  },
  deactivated() {
    // 不展示但也不摧毁组件时调用
    console.log("news component deactived");
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
</style>