<template>
  <div class="cm-entry-list">
    <ul class="cm-entry-list__wrapper">
      <li
        v-for="item in list"
        :key="item.imgUrl"
        class="cm-entry-list__item"
        @click="jumpPage"
      >
        <image class="cm-entry-list__item--icon" :src="item.imgUrl"/>
        <span class="cm-entry-list__item--name">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { routerPush } from '../../../utils';

export default {
  name: 'cm-entry-list',
  data() {
    return {
      list: [
        {
          imgUrl: require('../../../static/icon_workbench_cases.png'),
          name: '超市便利',
          jumpLink: './'
        }, {
          imgUrl: require('../../../static/icon_workbench_chart.png'),
          name: '蔬菜水果',
          jumpLink: './'
        }, {
          imgUrl: require('../../../static/icon_workbench_customer.png'),
          name: '老沙专送',
          jumpLink: './'
        }, {
          imgUrl: require('../../../static/icon_workbench_market.png'),
          name: '汉堡披萨',
          jumpLink: './'
        }, {
          imgUrl: require('../../../static/icon_workbench_products.png'),
          name: '医药健康',
          jumpLink: './'
        }, {
          imgUrl: require('../../../static/icon_workbench_staff.png'),
          name: '素食简餐',
          jumpLink: './'
        }, {
          imgUrl: require('../../../static/icon_workbench_wallet.png'),
          name: '地方小吃',
          jumpLink: './'
        }
      ]
    }
  },
  methods: {
    // 跳转页面
    jumpPage() {
      routerPush({
        url: '../search/index',
        params: {
          id: 123
        }
      })
    }
  }
}
</script>

<style lang="scss">
.cm-entry-list {
  padding: 0 $fm-gap-big;
  padding-bottom: $fm-gap-mid;

  &__wrapper {
    display: flex;
    flex-flow: wrap;
    
  }

  &__item {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 25%;
    padding: 16upx 0;
  }

  &__item--icon {
    width: $fm-logo-big;
    height: $fm-logo-big;
    margin-bottom: 8upx;
  }

  &__item--name {
    color: $fm-font-color1;
    font-size: $fm-font-size3;
  }
}
</style>
