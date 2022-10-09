<template>
  <ul>
    <!-- ? query 参数传入的消息在$route.query上 -->
    <!-- <li>消息编号:{{ $route.query.id }}</li>
    <li>消息标题:{{ $route.query.title }}</li> -->
    <li>消息编号:{{ id }}</li>
    <li>消息标题:{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "DetailPage",
  // 接受路由的props传参
  props: ["id", "title"],
  mounted() {
    // ? query 参数传入的消息在$route上
    console.log(this.$route);
  },
};
</script>

<style>
</style>