<template>
    <h1>Readonly And ShallowReadonly</h1>
    <h3>深只读：{{test1.country.peovince.city}}</h3>
    <button @click="test1.country.peovince.city++">+1</button>
    <h3>浅只读：{{test2.country.peovince.city}}</h3>
    <button @click="test2.country.peovince.city++">+1</button>
    <hr>
</template>

<script>
import { reactive, readonly, shallowReadonly } from 'vue';

export default {
    name: 'ReadonlyAndShallowReadonly',
    setup() {
        let test = reactive({
            name: 'xxx',
            age: 0,
            country: {
                peovince: {
                    city: 10
                }
            }
        });

        // 当你从别处获取的数据修改会影响他人时
        let test1 = readonly(test);
        let test2 = shallowReadonly(test);

        return {
            test1,
            test2
        }
    }
}
</script>

<style scoped>

</style>