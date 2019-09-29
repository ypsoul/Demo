<template>
  <div class="wrapper">
    <!-- <div>{{count}}</div>
    <button @click="stopwatch">stop</button> -->
    
  </div>
</template>

<script>
import { watch, ref, set, reactive } from "@vue/composition-api";
export default {
  setup() {
    // const refCount = ref(0)

    // watch(()=>console.log(refCount.value))

    // setTimeout(()=>{
    //   refCount.value += 2;
    // },1000)
    // const state = reactive({ count: 0 });
    // watch(
    //   () => state.count,
    //    (count, oldCount) =>{ console.log(count, oldCount)},
    //    {lazy:true,}
    //    );

    // setTimeout(() => {
    //   state.count += 2;
    // }, 1000);
    // const count = ref(2)
    // watch(count,(count,oldCount)=>{
    //   console.log(count,oldCount)
    // })
    // setTimeout(() => {
    //   count.value += 2;
    // }, 1000);

    // const state = reactive({count:0,name:'yp1'})
    // watch(
    //   [()=>state.count,()=>state.name],
    //   ([count,name],[oldCount,oldName])=>{
    //     console.log(count)
    //     console.log(name)
    //     console.log("---------------------")
    //     console.log(oldCount)
    //     console.log(oldName)
    //   },
    //   {
    //     lazy: true
    //   }
    // )
    // setTimeout(()=>{
    //   state.count++
    //   state.name = "yp2"
    // })

    // const count = ref(0)
    // const name = ref('yp1')

    //  watch(
    //   [count,name],
    //   ([count,name],[oldCount,oldName])=>{
    //     console.log(count)
    //     console.log(name)
    //     console.log('------------')
    //     console.log(oldCount)
    //     console.log(oldName)
    //   },
    //   {
    //     lazy:true
    //   }
    // )
    // setTimeout(()=>{
    //   count.value++
    //   name.value = "yp2"
    // })


    // const count = ref(0)
    // const stop = watch(()=>{
    //   console.log("监听到watch的变化"),
    //   console.log(count.value)
    // }

    // )

    // setTimeout(() => {
    //     count.value += 2
    // }, 2000);

    // const stopwatch = ()=>{
    //   stop()
    // }
    // return {
    //   count,
    //   stopwatch
    // }

  },
  data() {
    return {};
  }
};
</script>
<style lang="css" scoped>
.wrapper {
}
</style>