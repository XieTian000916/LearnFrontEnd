<template>
  <ShallowReactiveAndRef />
  <ReadonlyAndShallowReadonly />
</template>

<script>
import ShallowReactiveAndRef from './components/ShallowReactiveAndRef.vue';
import ReadonlyAndShallowReadonly from './components/ReadonlyAndShallowReadonly.vue';

export default {
  name: 'App',
  components: {
    ShallowReactiveAndRef,
    ReadonlyAndShallowReadonly
  }
}
</script>

<style>

</style>
