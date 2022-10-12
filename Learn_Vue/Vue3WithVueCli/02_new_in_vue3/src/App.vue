<template>
  <ApiSetup />
  <ApiRef />
  <ApiReactive />
  <ApiWatchEffect />
</template>

<script>
import ApiSetup from './components/ApiSetup.vue';
import ApiRef from './components/ApiRef.vue';
import ApiReactive from './components/ApiReactive.vue';
import ApiWatchEffect from './components/ApiWatchEffect.vue';

export default {
  name: 'App',
  components: {
    ApiSetup,
    ApiRef,
    ApiReactive,
    ApiWatchEffect
  }
}
</script>

<style>

</style>
