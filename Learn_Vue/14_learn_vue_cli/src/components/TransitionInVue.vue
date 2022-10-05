<template>
  <div id="demo">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <h1 v-if="show">Transition In vue</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TransitionInvue",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>