<!-- refs -->
<template>
  <div>
      <h3 ref="h3Ref">我是一个h3标签</h3>
      <p>{{str1}}</p>
  </div>
</template>

<script>
import { ref , onMounted } from '@vue/composition-api'
export default {
  name:'',
  setup(){
    //   const h3Ref = ref(null)
    //   onMounted(()=>{
    //       h3Ref.value.style.color = "red"
    //   })
    //   return {
    //       h3Ref
    //   }
    const str1 =  ref('this is 子组件')

    const setStr = ()=>{
        str1.value = "被赋值了---"
    }

    return {
        str1,
        setStr

    }
  }
}

</script>
<style lang='css' scoped>
</style>