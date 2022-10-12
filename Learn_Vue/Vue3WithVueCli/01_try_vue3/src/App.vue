<template>
  <ApiComputed />
  <ApiWatch />
</template>

<script>
import ApiComputed from './components/ApiComputed.vue';
import ApiWatch from './components/ApiWatch.vue';

export default {
  name: 'App',
  components: {
    ApiComputed,
    ApiWatch
  }
}
</script>

<style>

</style>
