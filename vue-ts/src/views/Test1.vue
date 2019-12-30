<template>
  <div class="test1-wrap">
    <div>{{ title }}</div>
    <div class="roleInfo">{{ roleInfo }}</div>
    <div v-for="(item, index) in roleArr" :key="index">
      <div>姓名:{{ item.name }}</div>
      <div>角色：{{ item.role }}</div>
    </div>
    <button @click="add(1)">点击</button>
    <Test2
      titleFromTest1="我是从test1传给子组件的值"
      @eventFromTest2="postMessage"
    />
    <div>coder:{{ coder }}</div>
    <div>版本号：{{ version }}</div>
    <div>{{ profile.user.firstNam }}</div>
    <div>{{ fullName }}</div>

    <ul>
      <li v-for="(item, index) in book" :key="index">
        <img :src="item.bookImg" alt="" />
        <div>{{ item.bookName }}</div>
        <div>{{ item.bookAuthor }}</div>
        <div>¥{{ item.bookPrice }}</div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Test2 from "./Test2.vue";
import { State, Action, Getter } from "vuex-class";
import { ProfileState, RootState } from "../store/types";

const namespace = "profile";

@Component({
  components: { Test2 }
})
export default class Test1 extends Vue {
  @State version!: RootState;
  @State coder!: RootState;
  @State profile!: ProfileState;

  @Getter("fullName", { namespace }) fullName!: string;

  @State("book", { namespace }) book!: object;
  @Action("fetchData", { namespace }) fetchData: any;

  title: string = "律师精英";
  roleArr: object[] = [
    { name: " 靳东", role: "罗槟" },
    { name: " 田雨", role: "何赛" },
    { name: " 孙淳", role: "封印" }
  ];

  get roleInfo(): string {
    return this.title + "的演员列表";
  }
  add(a: number): void {
    alert(a);
  }
  postMessage(e: any): void {
    console.log(e);
  }
  mounted() {
    this.fetchData();
  }
}
</script>
<style scoped>
.test1-wrap {
  color: red;
}
.roleInfo {
  color: blue;
  padding: 10px 0;
}
</style>
