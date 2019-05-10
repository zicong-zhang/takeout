<template>
  <div class="cm-entry-list">
    <ul class="cm-entry-list__wrapper">
      <li
        v-for="item in list"
        :key="item.name"
        class="cm-entry-list__item"
        @click="jumpPage"
      >
        <img 
          class="cm-entry-list__item__icon"
          v-if="label && item.imgUrl"
          :src="item.imgUrl"
          key="has-label"
        />
        <i
          v-else
          key="no-label"
          class="cm-entry-list__item__icon"
        ></i>
        <span class="cm-entry-list__item__name">{{ label ? item.name : '入口名称' }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { routerPush } from '../../../utils';

export default {
  name: 'cm-entry-list',
  props: {
    // 当前在哪个页面使用
    label: {
      default: ''
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      list: 'cmEntryList/list'
    }),
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
  padding: 6px 0;

  &__wrapper {
    display: flex;
    flex-flow: wrap;
  }

  &__item {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 25%;
    padding: 8px 0;
  }

  &__item__icon {
    width: $fm-logo-big;
    height: $fm-logo-big;
    background: #eee;
    border-radius: 50%;
    margin-bottom: 8px;
  }

  &__item__name {
    color: $fm-font-color1;
    font-size: $fm-font-size3;
  }
}
</style>
