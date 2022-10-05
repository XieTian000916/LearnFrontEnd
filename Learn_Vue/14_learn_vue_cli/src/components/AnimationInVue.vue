<template>
  <div>
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
      <h1 v-if="show">Animation In Vue</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AnimationInVue",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>