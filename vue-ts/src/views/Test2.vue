<template>
  <div class="test2-wrap">
    <div>{{ titleFromTest1 }}</div>
    <button @click="postMessage">传递数据</button>
    <br />
    <input type="text" v-model="msg" @change="onChange" />
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Emit, Watch, Component } from "vue-property-decorator";

@Component
export default class Test2 extends Vue {
  title: string = "test2传递给父组件的标题信息";

  msg: string = " ";

  @Prop({ type: String })
  titleFromTest1!: string;

  @Emit("eventFromTest2")
  postMessage(): string {
    return this.title;
  }

  @Watch("msg", { deep: true, immediate: true })
  onChange(newV: string, oldV: string): void {
    console.log(newV, oldV, "测试msg");
  }
}
</script>
<style scoped>
.test2-wrap {
  color: green;
}
</style>
