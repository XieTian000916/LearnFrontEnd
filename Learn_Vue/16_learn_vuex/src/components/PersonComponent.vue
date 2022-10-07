<template>
  <div>
    <h1>人员名单</h1>
    <input type="text" v-model="pname" />
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in personlist" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
    <h2>共享的数据(加和)：{{ sum }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "PersonComponent",
  data() {
    return {
      pname: "",
    };
  },
  methods: {
    addPerson() {
      const personObj = { id: nanoid(), name: this.pname };
      this.$store.dispatch("personAbout/addperson", personObj);
      this.pname = "";
    },
  },
  computed: {
    ...mapState("personAbout", ["personlist"]),
    ...mapState("countAbout", ["sum"]),
  },
};
</script>

<style>
</style>