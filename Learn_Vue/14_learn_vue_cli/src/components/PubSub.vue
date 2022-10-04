<template>
  <div>
    <h1>Subscribe abd Publish messages</h1>
    <button @click="pubMsg">click to publish a massage</button>
  </div>
</template>

<script>
// 引入第三方库
import pubsub from "pubsub-js";

export default {
  name: "PubSub",
  methods: {
    pubMsg() {
      pubsub.publish("testPubsub", "use pubsub-js published a msg");
    },
  },
  mounted() {
    // pubsub.publish("testPubsub", "use pubsub-js published a msg");
  },
};
</script>

<style>
</style>