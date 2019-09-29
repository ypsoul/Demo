<!-- 子组件 -->
<template>
  <div>
      <h3>子组件</h3>
      <hr>
        <son-son></son-son>
  </div>
</template>

<script>
import sonSon from './son-son'
export default {
  name:'',

  data () {
    return {
    };
  },

 created(){},

  components: {
      sonSon
  },

  computed: {},

  mounted(){},

  watch:{},

  methods: {}
}

</script>
<style lang='css' scoped>
</style>