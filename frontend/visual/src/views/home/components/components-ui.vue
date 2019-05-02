<template>
  <section class="components-view">
    <div class="select-component">
      <label>组件库：</label>
      <!-- <img src="../../../../static/icon_workbench_cases.png" alt=""> -->
      <select>
        <option value="1">通用组件</option>
        <option value="2">微信小程序专用组件</option>
        <option value="3">支付宝小程序专用组件</option>
      </select>
    </div>
    <ul class="component-list">
      <li
        v-for="item in components"
        :key="item.id"
        class="component-list-item"
        @click="onSelect(item)"
      >
        <h3 class="component-name">{{ item.name }}</h3>
        <component
          :is="item.id"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import components from '@/components';
console.log('components:_____', components);
export default {
  name: 'components-view',
  data() {
    return {
      components,
    }
  },
  methods: {
    onSelect(component) {
      this.$store.commit('addComponent', component.id);
    }
  }
}
</script>

<style lang="scss" scoped>

.components-view {
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 4;
  margin-right: 24px;
}
.select-component {
  align-self: flex-start;
  margin-bottom: 24px;
}
.component-list {
  @include scroll-bar();
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  padding: 16px;
}
.component-list-item {
  overflow: hidden;
  position: relative;
  width: 48%;
  max-height: 300px;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.16);
  padding: 24px;
  margin-bottom: 16px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
  &:nth-of-type(2n + 1) {
    margin-right: 16px;
  }
}
.component-name {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  text-align-last: left;
  margin-bottom: 16px;
}
</style>
