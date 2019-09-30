<!-- 孙组件 -->
<template>
  <div :style="{color:color}">
      孙组件
  </div>
</template>

<script>
import { inject } from '@vue/composition-api'
export default {
  name:'',
  setup(){
    const  color = inject('themeColor');

    return {
        color: color,
    }
  },

  data () {
    return {
    };
  },

 created(){},

  components: {},

  computed: {},

  mounted(){},

  watch:{},

  methods: {}
}

</script>
<style lang='css' scoped>
</style>