<!--  -->
<template>
  <div>
    <input type="text" v-model="kw">
  </div>
</template>

<script>
import { ref, watch ,onBeforeMount,onMounted, } from "@vue/composition-api";
export default {
  name: "",
  setup() {
    const kw = ref("");

    const asyncprint = val => {
      return setTimeout(() => {
        console.log(val);
      }, 1000);
    };

    watch(
      kw,
      (kw, oldkw, callback) => {
        const timeId = asyncprint(kw);

        callback(()=>clearTimeout(timeId));
      },
      { lazy: true }
    );

    onBeforeMount(()=>{
        console.log("onBeforeMount")
    });
    onMounted(()=>{
        console.log("onMounted")
    })

    return {
      kw
    };


  },
  data() {
    return {};
  },

  created() {},

  components: {},

  computed: {},

  mounted() {},

  watch: {},

  methods: {}
};
</script>
<style lang='css' scoped>
</style>