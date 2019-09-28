<template>
  <div class="wrapper">
    <div>count: {{count}}</div>
    <button @click="add">+1</button>
  </div>
</template>

<script>
import { reactive ,isRefs, toRefs} from "@vue/composition-api";
export default {
  setup(){
    const state = reactive({count:0,name:'yp'});

    // 定义+1方法
    const add =()=>{
      state.count += 1;
    }
    return {
      //...state,  // reactive 展开运算符后就不响应了
      ...toRefs(state),
      add
    }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
}
</script>
<style lang="css" scoped>
.wrapper{}
</style>