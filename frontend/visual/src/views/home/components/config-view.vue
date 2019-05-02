<template>
  <section class="config-view">
    <h3 class="title">页面配置</h3>
    <div class="config-item">
      <label>标题栏背景色</label>
      <ui-color-picker @confirm="onChangeColor" />
    </div>
    <div class="config-item">
      <label>标题栏字体色</label>
      <ui-color-picker
        old-color="#404040"
        @confirm="onChangeTextColor"
      />
    </div>
    <div class="config-item">
      <label>标题</label>
      <input
        type="text"
        class="input"
        maxlength="12"
        @input="changePageTitle"
      >
    </div>
    <div class="config-item">
      <h3 class="title">入口列表</h3>

    </div>
  </section>
</template>

<script>
  import http from '@/request';

  export default {
    name: "config-view",
    props: {
      currentPage: {
        type: String,
        default: 'index'
      }
    },
    data() {
      return {
        oldColor: '',
        timer: null,
      };
    },
    methods: {
      onChangeColor(color) {
        console.log('color:_____', color);
        this.$store.commit('changePageTitleColor', color);
        /* http.post('/mpUi/post/updateThemeColor', {
          projectName: 'laosha5',
          styles: {
            'fm-color': color
          }
        }) */
      },
      onChangeTextColor(color) {
        this.$store.commit('changePageTitleTextColor', color);
      },
      changePageTitle(e) {
        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
          this.$store.commit('changePageTitle', e.target.value);

          clearTimeout(this.timer);
          this.timer = null;
        }, 300);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .config-view {
    flex: 2;
  }
  .config-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    label {
      width: 90px;
      text-align: left;
      margin-right: 12px;
    }
  }
  .title {
    text-align: left;
    font-weight: normal;
    margin-bottom: 16px;
  }
  .fm-button {
    
  }
  .input {
    height: 28px;
    line-height: 28px;
    border: 1px solid $fm-font-color2;
    border-radius: 10px;
    padding: 0 10px;
  }
</style>
