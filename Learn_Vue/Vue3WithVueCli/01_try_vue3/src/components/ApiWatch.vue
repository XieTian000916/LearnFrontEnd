<template>
    <h1>ApiWatch</h1>

</template>

<script>
import { ref, watch } from 'vue';

export default {
    name: 'ApiWatch',
    setup() {
        // data
        let msg = ref('@');
        let sum = ref(0);

        // situation1: 用watch监视ref定义的一个响应式数据
        watch(msg, (newVal, oldVal) => {
            alert('监测到数据变动：' + oldVal + '>>>>>>' + newVal);
        }, { immediate: true });
        watch(sum, (newVal, oldVal) => {
            alert('监测到数据变动：' + oldVal + '>>>>>>' + newVal);
        }, { immediate: true });
    }
}
</script>

<style scoped>

</style>