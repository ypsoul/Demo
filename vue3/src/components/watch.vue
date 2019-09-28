<template>
  <div class="wrapper">
ww
  </div>
</template>

<script>
import { watch,ref, set } from "@vue/composition-api";
export default {
  setup(){
    const refCount = ref(0)

    watch(()=>console.log(refCount.value))

    setTimeout(()=>{
      refCount.value += 2;
    },1000)
  },
  data(){
    return {
    }
  },

}
</script>
<style lang="css" scoped>
.wrapper{}
</style>