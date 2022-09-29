<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">click to get DOM element above</button>
  </div>
</template>

/* ref属性
    1、被用来给元素或子组件注册引用信息（id的代替）
    2、应用在html标签上获取真实DOM元素，应用在组件标签上是组件实例对象
*/

<script>
export default {
    name:'UsageOfRef',
    data() {
        return {
            msg:'The usage of ref in vue'
        }
    },
    methods: {
        showDom(){
            // 此处this为vuecomponent组件实例对象
            // vue中使用$ref可替代原生中的id
            console.log(this.$refs.title); //获取到真实的DOM元素
        }
    },
}
</script>
