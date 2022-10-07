<template>
  <div>
    <h6>页面使用{{ lang }}前端框架开发</h6>
    <h1>当前的和为:{{ sum }}</h1>
    <!-- 读取组件中的数据$store.state.数据名称 -->
    <h3>放大十倍后的值为:{{ bigSum }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
    <button @click="increase(n)">+</button>
    <button @click="decrease(n)">-</button>
    <button @click="increaseOdd">当前和为奇数则加</button>
    <button @click="increaseWait">延迟加和</button>
    <h2>共享的数据(人数)：{{ personlist.length }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "CountComponent",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // 此处可用mapActions速通，***注意传值***
    // increase() {
    //   this.$store.dispatch("plus", this.n);
    // },
    // decrease() {
    //   this.$store.dispatch("minus", this.n);
    // },
    ...mapActions("countAbout", { increase: "plus", decrease: "minus" }),
    increaseOdd() {
      // 若没有网络请求或其他业务逻辑，组件中可直接越过actions，不写dispatch直接编写commit
      // 涉及逻辑判断更适合写入actions，此处只做调用，增加代码复用性
      if (this.$store.state.countAbout.sum % 2 !== 0) {
        this.$store.dispatch("countAbout/plus", this.n);
      }
    },
    increaseWait() {
      setTimeout(() => {
        this.$store.dispatch("countAbout/plus", this.n);
      }, 2000);
    },
  },
  computed: {
    // 根据Vue风格指南，组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法
    // 手写计算属性（比较麻烦）
    // sum() {
    //   return this.$store.state.sum;
    // },
    // lang() {
    //   return this.$store.state.lang;
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },

    // 借助mapState生成计算属性，从state中读取数据
    // 使用ES6 ... 语法放入对象
    // 对象写法
    ...mapState("countAbout", {
      sum: "sum",
      lang: "lang",
    }),
    ...mapState("personAbout", { personlist: "personlist" }),
    // 数组写法(该写法两边方法名须相同)
    // ...mapState(["sum", "lang"]),

    // 借助mapGetters生成计算属性，从getters中读取数据
    ...mapGetters("countAbout", { bigSum: "bigSum" }),
    // ...mapGetters(["bigSum"]),
  },
  mounted() {
    console.log("Instance object CountComponent is mounted");
  },
};
</script>

<style scoped>
select {
  width: 130px;
  height: 30px;
  line-height: 30px;
}
button {
  height: 30px;
  line-height: 30px;
  margin: 0 5px;
}
</style>