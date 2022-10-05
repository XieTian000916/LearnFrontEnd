<template>
  <div>
    <h1>Configuring the Proxy Server</h1>
    <button @click="getData">Click to request data</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ConfiguringProxyServer",
  methods: {
    getData() {
      axios.get("http://localhost:8080/learnvue/mydata").then(
        (response) => {
          console.log("请求成功！", response.data);
        },
        (error) => {
          alert("请求失败！" + error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>