<template>
  <ApiSetup />
  <ApiRef />
  <ApiReactive />
  <ApiWatchEffect />
  <LifecycleInVue3 />
  <CustomHooks />
</template>

<script>
import ApiSetup from './components/ApiSetup.vue';
import ApiRef from './components/ApiRef.vue';
import ApiReactive from './components/ApiReactive.vue';
import ApiWatchEffect from './components/ApiWatchEffect.vue';
import LifecycleInVue3 from './components/LifecycleInVue3.vue';
import CustomHooks from './components/CustomHooks.vue';

export default {
  name: 'App',
  components: {
    ApiSetup,
    ApiRef,
    ApiReactive,
    ApiWatchEffect,
    LifecycleInVue3,
    CustomHooks
  }
}
</script>

<style>

</style>
