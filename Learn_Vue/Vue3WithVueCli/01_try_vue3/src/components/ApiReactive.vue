<template>
    <h1>ApiReactive</h1>
    <h2>Name:{{person.name}}</h2>
    <h2>Age:{{person.age}}</h2>
    <h2>Job Title:{{person.job.title}}</h2>
    <h2>Salary:{{person.job.salary}}</h2>
    <h2>Hobby:{{person.hobby}}</h2>
    <button @click="changeInfo">change Info</button>
    <hr>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: 'ApiReactive',
    setup() {
        // reactive函数响应式处理数据(基本类型不支持，请用ref)
        // const 代理对象 = reactive(源对象)
        let person = reactive({
            name: 'Zhangsan',
            age: 18,
            job: {
                title: 'Front-End Engineer',
                salary: '30k'
            },
            hobby: ['eat', 'sleep', 'code']
        })

        // methods
        function changeInfo() {
            // 使用reactive处理的数据更改时无需加上.value
            person.name = 'RaidenShogun';
            person.age = 500;
            person.job.title = 'Ruler of Inazuma';
            person.job.salary = '?';
            // 更改数组中的数据
            person.hobby[2] = 'game';
        }

        // return
        // 返回一个对象
        return {
            person,
            changeInfo,
        }
    }
}
</script>

<style scoped>

</style>