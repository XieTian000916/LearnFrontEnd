<template>
    <h1>Shallow Reactive And Ref</h1>
    <h3>reactive:{{test1.age}}</h3>
    <button @click="test1.age++">age++</button>
    <h3>shallowReactive:{{test2.age}}</h3>
    <button @click="test2.age++">age++</button>
    <h3>reactive:{{test1.country.peovince.city}}</h3>
    <button @click="test1.country.peovince.city = 'Shanghai'">change city</button>
    <h3>shallowReactive:{{test2.country.peovince.city}}</h3>
    <button @click="test2.country.peovince.city = 'Shanghai'">change city</button>
    <h3>ref:{{demo1.x}}</h3>
    <button @click="demo1.x++">+1</button>
    <h3>shallowRef:{{demo2.y}}</h3>
    <button @click="demo2.y++">+1</button>
    <hr>
</template>

<script>
import { reactive, ref, shallowReactive, shallowRef } from 'vue';

export default {
    name: 'ShallowReactiveAndRef',
    /*
        shallowReactive:只对对象最外层数据进行响应式处理（使用：一个对象结构比较深，但变化时只是外层数据变化）
        shallowRef只处理基本数据类型，不进行对象的响应式（使用：一个对象数据，后续功能不会修改对象属性，而是用新的替换）
    */
    setup() {
        let test1 = reactive({
            name: 'xxx',
            age: 0,
            country: {
                peovince: {
                    city: 'Beijing'
                }
            }
        });

        let test2 = shallowReactive({
            name: 'xxx',
            age: 0,
            country: {
                peovince: {
                    city: 'Beijing'
                }
            }
        });

        let demo1 = ref({
            x: 0
        });

        let demo2 = shallowRef({
            y: 0
        });

        return {
            test1,
            test2,
            demo1,
            demo2
        }
    }
}
</script>

<style scoped>

</style>