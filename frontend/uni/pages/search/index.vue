<template>
  <div class="p-search">
    <h2>212312</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'p-search',
  components: {

  },
  computed: {
    ...mapGetters({
      man: 'entryList/man'
    })
  },
  onLoad() {
    console.log('this.man:_____', this.man);
  }
}
</script>
