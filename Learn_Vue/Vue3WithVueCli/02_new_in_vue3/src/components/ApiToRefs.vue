<template>
    <h1>Api toRefs</h1>
    <h3>Name:{{name}}</h3>
    <h3>Age:{{age}}</h3>
    <h3>Location:{{location.province.city}}</h3>
    <button @click="age++">change age</button>
</template>

<script>
import { /* toRef, */ reactive, toRefs } from 'vue';

export default {
    name: 'ApiToRefs',
    setup() {
        let person = reactive({
            name: 'Zhangsan',
            age: 18,
            location: {
                province: {
                    city: 'Beijiang'
                }
            }
        })

        // 使用toRef动态地向外尽可能简单地返回一个值
        // toRef(对象名，‘对象中的键名’)
        // let name = toRef(person,'name');
        // let age = toRef(person,'age');
        // let location = toRef(person.location.province,'city');

        return {
            // 向外返回整个对象中的键值方便使用
            // 无需如上多次拆分
            ...toRefs(person)
        }
    }
}
</script>

<style scoped>

</style>