<template>
  <ApiSetup />
  <ApiRef />
  <ApiReactive />
  <ApiComputed />
</template>

<script>
import ApiSetup from './components/ApiSetup.vue';
import ApiRef from './components/ApiRef.vue';
import ApiReactive from './components/ApiReactive.vue'
import ApiComputed from './components/ApiComputed.vue';

export default {
  name: 'App',
  components: {
    ApiSetup,
    ApiRef,
    ApiReactive,
    ApiComputed
  }
}
</script>

<style>

</style>
