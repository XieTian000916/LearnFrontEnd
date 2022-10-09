<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 多级路由带上父级的地址 -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <!-- 命名路由后的精简写法 -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            :to="{ name: 'Message' }"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 使用keepalive标签缓存路由组件(只能缓存一个) -->
      <!-- 缓存多个写法↓ -->
      <!-- <keep-alive :include="['componentName','componentName',...]"> -->
      <keep-alive include="NewsPage">
        <router-view> </router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
</style>