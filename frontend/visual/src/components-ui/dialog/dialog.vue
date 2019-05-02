<template>
  <div
    class="ui-dialog"
    v-if="isShow"
  >
    <div class="cover"></div>
    <transition name="dialog">
      <div class="ui-dialog-wrapper">
        <header class="ui-dialog-header">
          <h2 class="ui-dialog-title">{{ title }}</h2>

        </header>
        <section class="ui-dialog-content">
          <slot class="content">
            {{ content }}
          </slot>
        </section>
        <footer class="ui-dialog-footer">
          <button
            class="confirm ui-button"
            @click="onConfirm"
          >确定</button>
          <button
            class="cancel ui-button"
            @click="onCancel"
          >取消</button>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ui-dialog',
  props: {
    title: String,
    content: String
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    onConfirm() {
      this.$emit('confirm');
    },
    onCancel() {
      this.$emit('cancel');
    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 180;
  background: #000;
  opacity: .3;
  // user-select: none;
}
.ui-dialog {
  position: relative;
  z-index: 99999;
}
.ui-dialog-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 190;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 640px;
  min-height: 50%;
  background: #fff;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 24px 32px;
}
.ui-dialog-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 12px;
}
.ui-dialog-title {
  font-weight: normal;
}
.ui-dialog-content {
  flex: 1;
  padding: 24px 0;
}
.ui-dialog-footer {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #eaeaea;
  padding-top: 24px;
}
.ui-button {
  height: 34px;
  width: 88px;
  border-radius: 12px;
  font-size: 14px;
  box-shadow: 0 3px 20px 0 #ddd;
  background: #ececec;
  margin-left: 8px;
  &:active {
    opacity: .5;
  }
}
.confirm {
  background: #FAD8B4;
}
</style>
