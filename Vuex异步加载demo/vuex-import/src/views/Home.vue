<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
        {{ count }}
    </div>
    <div>
      <button @click="add(2)">添加</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'count',
  isVuex:true,
  components: {
    // HelloWorld
  },
  computed: {
    ...mapState({
      count: state => state.count.count
    })
  },
  methods: {
    ...mapActions(['count/reqApi']),
    add(num){
      //  console.log(this)
       this['count/reqApi']();
    }
  },
  mounted () {
    console.log()
  }
}
</script>
