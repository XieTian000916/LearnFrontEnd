<template>
    <h1>ApiRef</h1>
    <h2>Name:{{name}}</h2>
    <h2>Age:{{age}}</h2>
    <h2>Job Title:{{job.title}}</h2>
    <h2>Salary:{{job.salary}}</h2>
    <button @click="changeInfo">change Info</button>
    <hr>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'ApiRef',
    setup() {
        // data
        let name = ref('Zhangsan');
        let age = ref(18);

        // ref函数处理对象类型
        let job = ref({
            title: 'Front-End Engineer',
            salary: '30k'
        })

        // methods
        function changeInfo() {
            name.value = 'Lihua';
            age.value = 28;
            job.value.title = 'Back-End Engineer';
            job.value.salary = '35k';
        }

        // return
        // 返回一个对象
        return {
            name,
            age,
            changeInfo,
            job,
        }
    }
}
</script>

<style scoped>

</style>