<template>
  <section class="config-view">
    <div class="config-item">
      <vi-title title="页面配置"></vi-title>
      <vi-form-item label="标题背景">
        <vi-color-picker @confirm="onChangeColor" />
      </vi-form-item>
      <vi-form-item label="标题字体">
        <vi-color-picker
          old-color="#404040"
          @confirm="onChangeTextColor"
        />
      </vi-form-item>
      <vi-form-item label="标题">
        <vi-input
          maxlength="12"
          @input="changePageTitle"
        />
      </vi-form-item>
    </div>

    <component
      v-for="(item, idx) in currentUseComponent"
      :is="useComponents(item)"
      :key="idx"
      class="config-item"
    />

  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import http from '@/request';
  import useComponents from '@/components';

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
    computed: {
      ...mapGetters([
        'currentUseComponent'
      ])
    },
    created() {
      console.log('this.:_____', this.currentUseComponent);
    },
    methods: {
      useComponents(id) {
        const currentComponent = useComponents.find(item => item.id === id);
        console.log('currentComponent:_____', currentComponent);
        return currentComponent.hasConfig ? `${id}-config` : '';
      },
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
      changePageTitle(title) {
        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
          this.$store.commit('changePageTitle', title);

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
    @include scroll-bar();
    overflow-y: auto;
    overflow-x: hidden;
  }
  .config-item {
    display: flex;
    flex-flow: column;
    margin-bottom: 24px;
    &:not(:first-child) {
      border-top: 1px solid #eee;
      padding-top: 24px;
    }
    &--title {
      width: 90px;
      text-align: left;
      font-weight: normal;
      margin-bottom: 12px;
    }
  }
  .title {
    text-align: left;
    font-weight: normal;
    margin-bottom: 16px;
  }
</style>
