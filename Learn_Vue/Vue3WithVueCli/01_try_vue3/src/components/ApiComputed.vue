<template>
    <h1>ApiComputed</h1>
    <input type="text" v-model="person.firstName">-
    <input type="text" v-model="person.lastName"><br>
    <div>{{fullName}}</div>
    <input type="text" v-model="fullName">
    <hr>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
    name: 'ApiComputed',
    setup() {
        let person = reactive({
            firstName: '',
            lastName: '',
        })

        // 简写方式得到的是一个只读的计算属性
        // let fullName = computed(() => {
        //     return person.firstName + '-' + person.lastName;
        // })
        let fullName = computed({
            get() {
                return person.firstName + '-' + person.lastName;
            },
            set(val) {
                const nameArr = val.split('-');
                person.firstName = nameArr[0];
                person.lastName = nameArr[1];
            }
        })

        return {
            person,
            fullName
        }
    }
}
</script>

<style scoped>

</style>