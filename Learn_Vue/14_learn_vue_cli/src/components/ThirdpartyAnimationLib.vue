<template>
  <div>
    <button @click="show = !show">switch</button>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__zoomInDown"
      leave-active-class="animate__zoomOutDown"
    >
      <h1 v-show="!show" key="1">Try Third-party animation library</h1>
      <h3 v-show="show" key="2">Try Third-party animation library</h3>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "ThirdpartyAnimationLib",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
div {
  margin-bottom: 200px;
}

h1 {
  color: orangered;
  background-color: orange;
}

h3 {
  color: greenyellow;
  background-color: orange;
}
</style>