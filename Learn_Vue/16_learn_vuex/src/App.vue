<template>
  <div id="app">
    <count-component />
    <person-component />
  </div>
</template>

<script>
import CountComponent from "./components/CountComponent.vue";
import PersonComponent from "./components/PersonComponent.vue";

export default {
  name: "App",
  components: {
    CountComponent,
    PersonComponent,
  },
  mounted() {},
};
</script>

<style>
</style>
