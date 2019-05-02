<template>
  <div class="cm-address">
    <i class="icon icon-address"></i>
    <p class="cm-address-name">{{ address }}</p>
  </div>
</template>

<script>
export default {
  name: 'cm-address',
  data() {
    return {
      address: '广州市天河软件园天信楼'
    }
  }
}
</script>

<style lang="scss">
.cm-address {
  display: flex;
  align-items: center;
  background: $fm-color;
  padding: 16upx 32upx;
}
.cm-address-name {
  color: #fff;
  font-size: $fm-font-size3;
}
.icon-address {
  color: #fff;
  margin-right: 8upx;
}
</style>
