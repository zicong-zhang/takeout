<template>
  <div class="ui-color-picker">
    <div
      class="color-box"
      :style="{
        'background-color': selectedColor
      }"
      @click="showDialog"
    ></div>

    <ui-dialog
      v-if="isShowDialog"
      title="选择颜色"
      @confirm="onConfirm"
      @cancel="onCancel"
    >
      <div class="container">
        <chrome-picker v-model="color" />
      </div>
    </ui-dialog>
  </div>
</template>

<script>
  import { Chrome } from "vue-color";

  export default {
    name: "ui-color-picker",
    components: {
      "chrome-picker": Chrome
    },
    props: {
      // 旧的色值
      oldColor: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        color: {},
        isShowDialog: false,
        confirm: () => {},
        cancel: () => {}
      };
    },
    computed: {
      selectedColor() {
        if (!this.color.hex) {
          return this.oldColor;
        }

        return this.color.hex;
      }
    },
    created() {
      this.color = this.oldColor;
    },
    methods: {
      showDialog() {
        this.isShowDialog = true;
      },
      onConfirm() {
        this.confirm(this.selectedColor, this.color);
        this.$emit('confirm', this.selectedColor, this.color);
        this.isShowDialog = false;
      },
      onCancel() {
        this.$emit('cancel');
        this.isShowDialog = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .ui-color-picker {
    height: 24px;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .color-box {
    cursor: pointer;
    transition: box-shadow 0.5s;
    width: 24px;
    height: 24px;
    background: $fm-color;
    border-radius: $fm-radius;
    box-shadow: 0 3px 30px 0 #ddd;
    &:hover {
      box-shadow: 0 8px 20px 0 #bbb;
    }
  }
</style>
