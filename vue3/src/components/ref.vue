<template>
  <div class="wrapper">
      <!-- <div>{{a}}</div>
      <button @click="a+=1">+1 ref</button> -->
  </div>
</template>

<script>
import { ref, reactive ,isRef} from "@vue/composition-api";
export default {
  setup(){
    //   const a = ref(0)

    //   const  b =ref (1)
    //   const state = reactive({
    //       b
    //   })
    //   console.log(a.value,b)

    const c1 = ref(2)
    const state = reactive({
        c1
    })

    const c2 = ref(9)
    state.c1 = c2
    state.c1++

    console.log(state.c1)  // 10
    console.log(c2.value)  // 10
    console.log(c1.value)  // 2


    console.log(isRef(c2) ? c2.value : c2)

    //   return {
    //       a
    //   }
  },
  components:{},
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style lang="css" scoped>
.wrapper{}
</style>