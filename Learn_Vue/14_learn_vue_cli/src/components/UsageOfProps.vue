<template>
  <div>
    <h1>{{ title }}</h1>
    <h3>Name:{{ name }}</h3>
    <h3>Age:{{ myAge }}</h3>
    <h3>Sex:{{ sex }}</h3>
    <button @click="changeAge">click to change Age</button>
  </div>
</template>

<script>
export default {
  name: "UsageOfProps",
  data() {
    return {
      title: "Student Data",
      //   如需修改传入的值请设置一个中转变量进行接收
      myAge: this.age,
    };
  },
  // props:['name','age','sex'] //简单接收

  // 接收的同时对传入数据进行类型限制
  // props:{
  //     name:String,
  //     age:Number,
  //     sex:String
  // }

  // 接收时:类型限制+默认值指定+必要性限制
  props: {
    name: {
      type: String,
      required: true, // name是必要的
    },
    age: {
      type: Number,
      default: 18, // 无数据传入时默认的值
    },
    sex: {
      type: String,
      required: true, // sex是必要的
    },
  },
  methods: {
    changeAge() {
      this.myAge++;
    },
  },
};
// props是只读的,Vue底层会监测你对props的修改,如被修改会发出警告
</script>

<style>
</style>