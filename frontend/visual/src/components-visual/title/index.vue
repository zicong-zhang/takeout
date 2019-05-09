<template>
  <header class="vi-title">
    <h3 class="vi-title__name">{{ title }}</h3>
    <el-button
      v-if="del"
      type="text"
      size="small"
    >删除组件</el-button>
  </header>
</template>

<script>
export default {
  name: 'vi-title',
  props: {
    title: String,
    del: [String, Boolean]
  }
}
</script>

<style lang="scss" scoped>
.vi-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  &__name {
    position: relative;
    color: #666;
    font-size: 18px;
    text-align: left;
    font-weight: bold;
    padding-left: 12px;
    &:before {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      display: inline-block;
      width: 4px;
      height: 18px;
      background: $fm-color;
      border-radius: 4px;
    }
  }
}
</style>
