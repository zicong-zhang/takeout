<template>
  <div class="view-home">
    <div class="output-config">
      <h2>输出平台：</h2>
      <ul class="output-list">
        <li
          v-for="item in outputList"
          :key="item.id"
          class="output-list-item"
          @click="onSelect(item)"
        >
          <span class="output-list-item__checkbox">
            <i class="icon-ui i-gou" v-show="selectPF[item.id] "></i>
          </span>
          <span class="output-list-item__name">{{ item.name }}</span>
        </li>
      </ul>

      <el-button class="publish-button" size="small" type="primary" @click="onPublish">发布小程序</el-button>
    </div>
    <div class="container">
      <components-ui />
      <mini-view :current-page="currentPage" />
      <config-view :current-page="currentPage" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import ComponentsUi from './components/components-ui';
import MiniView from './components/mini-view';
import ConfigView from './components/config-view';

export default {
  name: 'view-home',
  components: {
    ComponentsUi,
    MiniView,
    ConfigView,
  },
  data() {
    return {
      currentPage: 'index',
      outputList: [
        {
          id: 'wx',
          name: '微信小程序'
        }, {
          id: 'aliPay',
          name: '支付宝小程序'
        }, {
          id: 'toutiao',
          name: '头条小程序'
        }, {
          id: 'baidu',
          name: '百度小程序'
        }
      ],
      selectPF: {}, // 勾选的输出平台
    }
  },
  methods: {
    ...mapActions([
      'publish'
    ]),
    onSelect(item) {
      const { id } = item;
      const selected = {...this.selectPF};

      selected[id]
        ? delete selected[id]
        : selected[id] = item;

      this.$set(this.$data, 'selectPF', selected);
    },
    onPublish() {
      this.publish();
    }
  }
}
</script>

<style lang="scss" scoped>
.view-home {
  display: flex;
  flex-flow: column;
  height: 100%;
  box-sizing: border-box;
  padding: 32px;
}
.container {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
section {
  height: 100%;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.16);
  padding: 32px;
}
.output-config {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  margin-bottom: 24px;
  h2 {
    font-size: 15px;
    font-weight: normal;
  }
}
.output-list {
  flex: 1;
  display: flex;
  margin-left: 16px;
}
.output-list-item {
  display: flex;
  align-items: center;
  margin-right: 24px;
  &__name {
    color: $fm-font-color1;
    font-size: 14px;
  }
  &__checkbox {
    position: relative;
    width: 20px;
    height: 20px;
    border: 1px solid $fm-font-color2;
    border-radius: 8px;
    margin-right: 6px;
  }
  .icon-ui {
    position:  absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 11px;
  }
}

</style>
