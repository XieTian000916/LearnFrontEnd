<template>
    <h1>ApiWatchEffect</h1>
    <h3>Adder</h3>
    <input type="text" v-model="addtion1"> + <input type="text" v-model="addtion2"> = <span>{{res}}</span>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
    name: 'ApiWatchEffect',
    setup() {
        let addtion1 = ref(0);
        let addtion2 = ref(0);
        let res = ref(0);

        /*  watchEffect无需指定监视的对象
            其中用到的数据会被自动监视
        */
        watchEffect(() => {
            if (addtion1.value == '') {
                addtion1.value = 0;
                res.value = parseFloat(addtion1.value) + parseFloat(addtion2.value);
            } else if (addtion2.value == '') {
                addtion2.value = 0;
                res.value = parseFloat(addtion1.value) + parseFloat(addtion2.value);
            } else {
                res.value = parseFloat(addtion1.value) + parseFloat(addtion2.value);
            }
            console.log('监测到数据变化');
        })

        return {
            addtion1,
            addtion2,
            res
        }
    }
}
</script>

<style scoped>

</style>