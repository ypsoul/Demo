<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <h1>父组件</h1>
    <button @click="color='red'">红色</button>
    <button @click="color='yellow'">黄色</button>
    <button @click="color='blue'">蓝色</button> -->
    <hr>
    <!-- <setup :page = "1"></setup> 
    <ref></ref>  -->
    <!-- <to-ref></to-ref> -->
    <!-- <computed></computed> -->
    <!-- <watch2></watch2> -->
    <!-- <child /> -->
    <template-refs ref="childref"></template-refs>

    <button @click="show">展示</button>
    <render-test @myClick="myClick" level="2" :list=list>
      <div slot="name1"> 这是slot-name1</div>
      <div slot="name2"> 这是slot-name2</div>
    </render-test>
  </div>
</template>

<script>
import { provide, ref } from "@vue/composition-api";

// import setup from './components/setup.vue'

// import ref from './components/ref.vue'

// import toRef from './components/toRefs.vue'

// import computed from './components/computed.vue'

// import watch from './components/watch.vue'

// import watch2 from './components/watch2.vue'

// import child from './components/child.vue'

import templateRefs from "./components/template-refs";

import renderTest from "./components/render-test";
export default {
  name: "app",
  setup() {
    // const color = ref('red');
    // provide('themeColor',color)
    // return {
    //   color
    // }
    const childref = ref(null);

    const show = () => {
      childref.value.setStr();
      console.log(childref);
      console.log("str1的值是:" + childref.value.str1);
    };

    return {
      childref,
      show
    };
  },
  data() {
    return {
      list: [
        { title: "这是一个标题1", status: 0 },
        { title: "这是一个标题2", status: 1 },
        { title: "这是一个标题3", status: 2 },
        { title: "这是一个标题4", status: 1 },
        { title: "这是一个标题5", status: 2 }
      ]
    };
  },
  components: {
    // setup,
    // ref,
    // toRef
    // computed
    // watch2
    // child
    templateRefs,
    renderTest
  },
  methods: {
    myClick(arg) {
      console.log(arg);
    }
  }
};
</script>

<style scope>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.foo {
  margin-top: 60px;
}
</style>
