<template>
  <div class="vi-form-item">
    <label class="vi-form-item--label">{{ label }}</label>
    <section class="vi-form-item--content-wrapper">
      <slot />

    </section>
  </div>
</template>

<script>
export default {
  name: 'vi-form-item',
  props: {
    label: {
      type: String,
      default: '标识'
    }
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.vi-form-item {
  display: flex;
  margin-bottom: 8px;
  &--content-wrapper {
    display: flex;
    flex-flow: column;
  }
  &--label {
    min-width: 80px;
    line-height: 30px;
    color: #666;
    text-align: left;
    margin-right: 12px;
  }
}
</style>
