<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Essential Links</h3>
    <Button :type="type" :text="text" @myClick="parDome"></Button>
    <!-- 注意单引号 -->
    <div v-display-key="'2'">
      <button>我是权限一</button>
    </div>
    <div v-display-key="'12'">
      <button>我是权限二</button>
    </div>
    <div v-display-key="'3'">
      <button>我是权限三</button>
    </div>
  </div>
</template>

<script>
import Button from "./button";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      type: "dangerous",
      text: "222"
    };
  },
  methods: {
    parDome(a) {
      console.log(a, 111);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
