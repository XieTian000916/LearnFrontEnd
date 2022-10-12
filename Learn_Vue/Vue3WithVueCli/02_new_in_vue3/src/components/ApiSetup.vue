<template>
    <h1>ApiSetup</h1>
    <h2>Name:{{name}}</h2>
    <h2>Age:{{age}}</h2>
    <button @click="showInfo">alert</button>
    <hr>
</template>

<script>
// import { h } from 'vue';

/*
    setup函数返回两种值：
        1.若返回一个对象，则对象中的属性、方法在模板中可以直接使用（常用）
        2.若返回一个渲染函数：则可以自定义渲染内容（了解）
    注意：
        1.vue2的配置项可以读取vue3中setup的属性和方法
        2.vue3的setup不能访问vue2中的配置项
        3。出现变量重名现象setup优先
*/
export default {
    name: 'ApiSetup',
    setup() {
        // data
        let name = 'Zhangsan';
        let age = 18;

        // methods
        function showInfo() {
            alert(`My name is ${name},${age} years old`);
        }

        // return
        // 返回一个对象
        return {
            name,
            age,
            showInfo
        }

        // 返回一个渲染函数
        // return () => h('h1', '此处的内容将替换模板中的内容')
    }
}
</script>

<style scoped>

</style>