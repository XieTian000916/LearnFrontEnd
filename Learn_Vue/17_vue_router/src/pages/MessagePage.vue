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
          :to="{
            path: '/home/message/detail',
            query: { id: m.id, title: m.title },
          }"
          >{{ m.title }}
        </router-link>
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
};
</script>

<style scoped>
</style>