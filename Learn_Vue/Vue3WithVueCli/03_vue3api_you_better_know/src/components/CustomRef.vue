<template>
    <h1>Custom Ref</h1>
    <input type="text" v-model="text">
    <div>{{text}}</div>
    <hr>
</template>

<script>
import { customRef } from 'vue';

export default {
    name: 'CustomRef',
    setup() {
        function myRef(val, delay = 1000) {
            let timer;
            return customRef((track, trigger) => {
                return {
                    get() {
                        track(); //追踪修改
                        return val;
                    },
                    set(newVal) {
                        val = newVal;
                        // 防抖处理
                        clearTimeout(timer);
                        timer = setTimeout(() => {
                            trigger(); //通知修改
                        }, delay)
                    }
                }
            })
        }

        let text = myRef(123)

        return {
            text
        }
    }
}
</script>

<style scoped>

</style>