<template>
  <div class="wrapper">
    <p>count:{{refCount}}</p>
    <p>计算属性：{{computedCount}}</p>
    <button @click="refCount+=1">+1</button>
  </div>
</template>

<script>
import { ref, computed } from "@vue/composition-api";
export default {
  setup() {
    const refCount = ref(0);

    //   const computedCount = computed(()=> refCount.value+1)

    //   computedCount=2

    const computedCount = computed({
      get: () => refCount.value + 1,
      set: a => {
        refCount.value = a + 112;
      }
    });
    computedCount.value = 33;
    return {
      refCount,
      computedCount
    };
  },
  components: {},
  props: {},
  data() {
    return {};
  }
};
</script>
<style lang="css" scoped>
.wrapper {
}
</style>