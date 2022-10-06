<template>
  <div>
    <h1>搜索GitHub用户案例</h1>
    <el-input
      placeholder="Search Github Users"
      v-model="input"
      class="input-with-select"
    >
      <el-select v-model="select" slot="prepend" placeholder="GitHub">
        <el-option label="GitHub" value="1"></el-option>
        <el-option label="Bilibili" value="2"></el-option>
      </el-select>
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="searchUsers"
      ></el-button>
    </el-input>
    <el-row>
      <el-col :span="6" v-for="user in info.users" :key="user.login">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="user.avatar_url" class="image" />
          <div style="padding: 14px">
            <span>{{ user.login }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ user.login }}</time>
              <el-button type="text" class="button"
                ><a :href="user.html_url" target="_blank"
                  >前往主页</a
                ></el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 欢迎词 -->
    <h1 v-show="info.isFirst">Welcome!</h1>
    <!-- 显示加载 -->
    <h1 v-show="info.isLoading">Loading...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GithubCase",
  data() {
    return {
      input: "",
      select: "GitHub",
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新数据
      this.info = {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      };
      axios.get(`https://api.github.com/search/users?q=${this.input}`).then(
        (response) => {
          this.info = {
            isFirst: false,
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          };
        },
        (error) => {
          // alert("请求失败" + error.message);
          this.info = {
            isFirst: false,
            isLoading: false,
            errMsg: error.message,
            users: [],
          };
        }
      );
    },
  },
};
</script>

<style scoped>
/* search style */
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
/* cards style */
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>