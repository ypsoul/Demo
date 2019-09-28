<template>
  <div class="wrapper">
      <p>count:{{count}}</p>
      <button @click="count+=1">+1</button>
  </div>
</template>

<script>
import { reactive } from "@vue/composition-api";
export default {
  props: {
    page: { type: Number }
  },
  setup(props,context) {
    // console.log("setup");
    //    console.log(props.page);
    // console.log(context,"ctx")
    const state = reactive({count:0})
    state.count += 1;
    console.log(state)
    return state;
    
  },
  beforeCreate() {
    // console.log("beforeCreate");
  },
  created() {
    // console.log("created");
  },
  components: {},
  data() {
    return {};
  },

};
</script>
<style lang="css" scoped>
.wrapper {
}
</style>