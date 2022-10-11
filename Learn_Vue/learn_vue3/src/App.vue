<template>
  <div>{{ msg.split(" ").map((v) => `#${v}`) }}</div>
  <!-- 模板内可跟api -->
</template>

<script setup lang="ts">
const msg: string = "try Vue3";
</script>

<style></style>
