<template>
    <!-- 组件的结构 -->

    <div class="demo">
        <h1>Learn {{lang}}.js</h1>
        <button @click="msg">Start</button>
    </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）

export default { // 注意使用默认暴露方便模块化引用
    name: 'Learn',
    data() {
        return {
            lang: 'Vue',
        }
    },
    methods: {
        msg() {
            alert("Start Now !");
        }
    },
}
</script>

<style>
/* 组件的样式 */

.demo {
    background-color: pink;
}
</style>
