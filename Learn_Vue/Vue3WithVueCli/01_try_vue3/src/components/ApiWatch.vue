<template>
    <h1>ApiWatch</h1>
    <h2>{{msg}}</h2>
    <button @click="msg += '@'">click to change msg above</button>
    <h2>{{sum}}</h2>
    <button @click="sum += 1">click to +1</button>
    <ul>
        <li>Name:{{person.name}}</li>
        <li>Age:{{person.age}}</li>
        <li>Salary1:{{person.job.corpA.salary}}k</li>
        <li>Salary2:{{person.job.corpB.salary}}k</li>
        <button @click="person.age += 1">点我长大</button>
        <button @click="person.job.corpA.salary += 5">点我涨薪1</button>
        <button @click="person.job.corpB.salary += 5">点我涨薪2</button>
    </ul>
    <hr>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
    name: 'ApiWatch',
    setup() {
        // data
        let msg = ref('@');
        let sum = ref(0);
        let person = reactive({
            name: 'Zhangsan',
            age: 18,
            job: {
                corpA: {
                    salary: 30
                },
                corpB: {
                    salary: 35
                }
            }
        })

        // situation1: 用watch监视ref定义的一个响应式数据
        // watch(msg, (newVal, oldVal) => {
        //     alert('监测到数据变动：' + oldVal + '>>>>>>' + newVal);
        // });
        // watch(sum, (newVal, oldVal) => {
        //     alert('监测到数据变动：' + oldVal + '>>>>>>' + newVal);
        // });

        // situation2：使用watch监视多个ref响应式数据
        // watch([msg, sum], (newVal, oldVal) => {
        //     alert('监测到数据变动：' + oldVal + '>>>>>>' + newVal);// 注意:此时数组中的每一个数据的新旧值都会被打印
        // });

        // situation3:监视reactive所定义的一个响应式数据的全部属性
        // watch(person, (newVal, oldVal) => {
        //     /*
        //         1.此处无法获取正确的oldValue
        //         2.此处的deep配置无效,job中的数据仍会被捕获
        //      */
        //     console.log('监测到数据变动：', oldVal, newVal);
        // }, { deep: false });

        // situation4: 监视reactive所定义的一个响应式数据的一个属性
        /* 使用函数的返回值的形式 */
        /* 由于监视的是对象中的某个套娃属性,所以deep属性设置有效 */
        // watch(() => person.job, (newVal, oldVal) => {
        //     console.log('监测到数据变动：', oldVal, newVal);
        // }, { deep: true });
        /* !!!监视对象中的单个一般属性(字符串\数字...)可以得到oldValue */
        watch(() => person.age, (newVal, oldVal) => {
            console.log('监测到数据变动：', oldVal, newVal);
        }, { deep: false });

        // situation4: 监视reactive所定义的一个响应式数据的多个属性
        /* 数组中的多个函数返回值的形式 */
        // watch([() => person.job, () => person.age], (newVal, oldVal) => {
        //     console.log('监测到数据变动：', oldVal, newVal);
        // }, { deep: true });

        return {
            msg,
            sum,
            person
        }
    }
}
</script>

<style scoped>

</style>