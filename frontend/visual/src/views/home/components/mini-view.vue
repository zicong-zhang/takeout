<template>
  <section class="mini-view">
    <div class="select-component">
      <label>页面：</label>
      <!-- <img src="../../../../static/icon_workbench_cases.png" alt=""> -->
      <select>
        <option value="1">首页</option>
        <option value="2">订单详情</option>
        <option value="3">店铺详情</option>
      </select>
    </div>

    <!-- 小程序视图 -->
    <section class="mini-program">
      <!-- 小程序头部 -->
      <header
        class="mini-program-header"
        :style="{
        backgroundColor,
      }"
      >
        <h2
          class="mini-program-header__name"
          :style="{
            color: pageTextColor
          }"
        >{{ page.title }}</h2>
        <nav
          class="capsule"
          :style="{
            borderColor: pageTextColor
          }"
        >
          <i
            class="icon-ui i-xiaochengxu1"
            :style="{
              color: pageTextColor
            }"
          ></i>
        </nav>
      </header>

      <!-- 小程序内容 -->
      <div class="mini-program-content">
        <ul class="component-view-list">
          <li class="component-view-list-item">
            <component
              v-for="id in componentList"
              :key="id"
              :is="id"
              :label="currentPage"
            />
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import components from '@/components';

export default {
  name: 'mini-view',
  data() {
    return {
      components
    }
  },
  computed: {
    page() {
      return this.$store.state.pagesConfig[this.currentPage];
    },
    componentList() {
      return this.page.components;
    },
    backgroundColor() {
      console.log('this.page:_____', this.page);
      return this.$store.state.pagesConfig[this.currentPage].backgroundColor;
    },
    ...mapGetters([
      'currentPage',
      'pageTextColor',
    ])
  },
  created() {
    console.log('this.pagesConfig:_____', this.componentList);
  }
}
</script>

<style lang="scss" scoped>
.mini-view {
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: none;
  margin-right: 24px;
}
.select-component {
  align-self: flex-start;
  margin-bottom: 32px + 8px;
}
.mini-program {
  overflow: hidden;
  width: 375px;
  height: 667px;
  border-radius: 12px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
}
.mini-program-header {
  position: relative;
  height: 44px;
  background: $fm-color;
  padding: 0 16px;

}
.mini-program-header__name {
  height: 44px;
  line-height: 44px;
  font-weight: normal;
  font-size: 16px;
}
.capsule {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 28px;
  border: 1px solid $fm-font-color1;
  border-radius: 28px;
  .icon-ui {
    font-size: 24px;
  }
}
.mini-program-content {
  @include scroll-bar(none);
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(667px - 44px);
  user-select: none;
}
.component-view-list-item {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
  }
}
</style>
