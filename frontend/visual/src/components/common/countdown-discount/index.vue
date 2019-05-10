<template>
  <div class="uni-cm-countdown-discount">
    <h2>这是新增的 uni-cm-countdown-discount</h2>
    <p>开始倒计时: {{ startTime }}s</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'uni-cm-countdown-discount',
  data() {
    return {
      time: 5000
    }
  },
  computed: {
    ...mapGetters({
      startTime: 'cmCountdownDiscount/startTime'
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
