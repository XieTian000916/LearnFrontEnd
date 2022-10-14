<template>
  <ShallowReactiveAndRef />
  <ReadonlyAndShallowReadonly />
  <CustomRef />
</template>

<script>
import ShallowReactiveAndRef from './components/ShallowReactiveAndRef.vue';
import ReadonlyAndShallowReadonly from './components/ReadonlyAndShallowReadonly.vue';
import CustomRef from './components/CustomRef.vue';

export default {
  name: 'App',
  components: {
    ShallowReactiveAndRef,
    ReadonlyAndShallowReadonly,
    CustomRef
  }
}
</script>

<style>

</style>
