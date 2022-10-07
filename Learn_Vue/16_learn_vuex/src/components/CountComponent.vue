<template>
  <div>
    <h1>当前的和为:{{ $store.state.sum }}</h1>
    <!-- 读取组件中的数据$store.state.数据名称 -->
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
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseOdd">当前和为奇数则加</button>
    <button @click="increaseWait">延迟加和</button>
  </div>
</template>

<script>
export default {
  name: "CountComponent",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increase() {
      this.$store.dispatch("plus", this.n);
    },
    decrease() {
      this.$store.dispatch("minus", this.n);
    },
    increaseOdd() {
      // 若没有网络请求或其他业务逻辑，组件中可直接越过actions，不写dispatch直接编写commit
      // 涉及逻辑判断更适合写入actions，此处只做调用，增加代码复用性
      if (this.$store.state.sum % 2 !== 0) {
        this.$store.dispatch("plus", this.n);
      }
    },
    increaseWait() {
      setTimeout(() => {
        this.$store.dispatch("plus", this.n);
      }, 2000);
    },
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