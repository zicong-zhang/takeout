<template>
  <input
    class="vi-input"
    type="text"
    :value="selfValue"
    @input="onInput"
  >
</template>

<script>
export default {
  name: 'vi-input',
  props: {
    value: [String, Number]
  },
  data() {
    return {
      selfValue: ''
    }
  },
  created() {
    this.selfValue = this.value;
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.vi-input {
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  padding: 4px 8px;
}
</style>
