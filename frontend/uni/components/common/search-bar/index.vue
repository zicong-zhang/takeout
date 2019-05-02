<template>
  <div class="cm-search-bar">
    <div class="cm-search-bar__wrapper" @click="toSearch">
      <i class="icon icon-search"></i>
      <p>搜索商家、商品名称</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cm-search-bar',
  data() {
    return {
    }
  },
  methods: {
    toSearch() {
      
    }
  }
}
</script>

<style lang="scss">
.cm-search-bar {
  background: $fm-color;
  padding: 16upx 32upx;

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $fm-btn-height;
    line-height: $fm-btn-height;
    background: #fff;
    border-radius: $fm-btn-height;
    color: $fm-font-color2;
    font-size: $fm-font-size3;
  }
}
.icon-search {
  line-height: 28upx;
  margin-right: 8upx;
}
</style>
