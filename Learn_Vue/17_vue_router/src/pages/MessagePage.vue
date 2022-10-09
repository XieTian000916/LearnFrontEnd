<template>
  <div>
    <ul>
      <li v-for="m in msgList" :key="m.id">
        <!-- 使用 “？” query参数传递消息  -->
        <!-- 字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`"
          >{{ m.title }}
        </router-link> -->
        <!-- 对象写法(推荐) -->
        <router-link
          replace
          :to="{
            name: 'Detail',
            //path: '/home/message/detail',
            query: { id: m.id, title: m.title },
          }"
          >{{ m.title }}
        </router-link>
        <!-- 编程式路由导航：不借助router-link实现路由跳转 -->
        <button @click="pushJump(m)">push跳转</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MessagePage",
  data() {
    return {
      msgList: [
        { id: nanoid(), title: "msg001" },
        { id: nanoid(), title: "msg002" },
        { id: nanoid(), title: "msg003" },
      ],
    };
  },
  methods: {
    pushJump(m) {
      // 编程式路由导航：不借助router-link实现路由跳转(push/replace/forward/back/go...)
      this.$router.push({
        name: "Detail",
        //path: '/home/message/detail',
        query: { id: m.id, title: m.title },
      });
    },
  },
  beforeDestroy() {
    console.log("Message component will be destroyed");
  },
};
</script>

<style scoped>
</style>