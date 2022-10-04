<template>
  <div id="app">
    <UsageOfRef />
    <hr />
    <UsageOfProps name="Zhangsan" :age="18" sex="male" />
    <hr />
    <UseMixin1 />
    <hr />
    <UseMixin2 />
    <hr />
    <h1>Usage Of Plugins</h1>
    <button @click="hello">test method import from plugins</button>
    <hr />
    <!-- ↓  使用$emit触发自定义事件 -->
    <CustomEventsInVue @zidingyi="showId" />
    <!-- ↓  使用$ref和生命周期函数触发自定义事件（此方法更加灵活） -->
    <!-- <CustomEventsInVue ref="zidingyi" /> -->
    <h3>ID:{{ idFromComponent }}</h3>
    <hr />
    <pub-sub />
  </div>
</template>

<script>
// 引入组件
import UsageOfRef from "./components/UsageOfRef.vue";
import UsageOfProps from "./components/UsageOfProps.vue";
import UseMixin1 from "./components/UseMixin1.vue";
import UseMixin2 from "./components/UseMixin2.vue";
import CustomEventsInVue from "./components/CustomEventsInVue.vue";
import PubSub from "./components/PubSub.vue";

// 引入第三方库
import pubsub from "pubsub-js";

export default {
  name: "App",
  components: {
    UsageOfRef,
    UsageOfProps,
    UseMixin1,
    UseMixin2,
    CustomEventsInVue,
    PubSub,
  },
  data() {
    return {
      idFromComponent: "",
    };
  },
  methods: {
    showId(id) {
      alert("子组件传递的id值为：" + id);
      this.idFromComponent = id;
    },
  },
  mounted() {
    // this.$refs.zidingyi.$on("zidingyi", this.showId);

    // 订阅消息
    this.subId = pubsub.subscribe("testPubsub", (msgName, data) => {
      alert("收到来自" + msgName + "发布的新消息：" + data);
    });
  },
  beforeDestroy() {
    // 记得取消订阅
    pubsub.unsubscribe(this.subId);
  },
};
</script>

<style>
</style>