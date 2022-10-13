<template>
    <h1>Lifecycle In Vue3</h1>
    <h3>输出顺序详见控制台</h3>
    <hr>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

export default {
    name: 'LifecycleInVue3',
    /*
    Vue3.x也提供了组合式API形式的生命周期钩子，与Vue2.x的对应关系如下
        beforeCreate =====> setup
        created =====> setup
        beforeMount =====> onBeforeMount
        mounted =====> onMounted
        beforeUpdate =====> onBeforeUpdate
        updated =====> onUpdated
        BeforeUnmount =====> onBeforeUnmount
        Unmounted =====> onUnmounted
    */
    setup() {
        console.log('----setup----');
        onBeforeMount(() => {
            console.log('----onBeforeMount----');
        }),
            onMounted(() => {
                console.log('----onMounted----');
            }),
            onBeforeUpdate(() => {
                console.log('----onBeforeUpdate----');
            }),
            onUpdated(() => {
                console.log('----onUpdated----');
            }),
            onBeforeUnmount(() => {
                console.log('----onBeforeUnmount----');
            }),
            onUnmounted(() => {
                console.log('----onUnmounted----');
            })
    },
    /* 通过执行结果可以发现setup及其中的组合式API总是先于传统生命周期钩子执行 */
    beforeCreate() {
        console.log('----beforeCreate----');
    },
    created() {
        console.log('----created----');
    },
    beforeMount() {
        console.log('----beforeMount----');
    },
    mounted() {
        console.log('----mounted----');
    },
    beforeUpdate() {
        console.log('----beforeUpdate----');
    },
    updated() {
        console.log('----updated----');
    },
    BeforeUnmount() {
        console.log('----beforeDestroy----');
    },
    Unmounted() {
        console.log('----destroyed----');
    },
}
</script>

<style scoped>

</style>