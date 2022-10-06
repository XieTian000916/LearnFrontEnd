<template>
  <div>
    <h1>
      <slot name="forh1">在此放置h1标签中的内容</slot>
    </h1>
    <h2>
      <slot>在此放置h2标签中的内容（默认插槽）</slot>
    </h2>
    <h3>
      <slot name="forh3">在此放置h3标签中的内容</slot>
    </h3>
    <h4>
      <slot v-bind:slotsData="fromSlots">{{ fromSlots }}</slot>
    </h4>
  </div>
</template>

<script>
export default {
  name: "UsageOfSlots",
  data() {
    return {
      fromSlots: "This msg is from slots",
    };
  },
};
</script>

<style scoped>
div {
  border: 5px solid #41b883;
}
</style>