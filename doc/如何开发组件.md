[TOC]

# 如何开发一个组件

组件的开发工作在 `/frontend/uni/components` 中进行

### 举个例子：我现在需要开发一个倒计时折扣组件
**开发前请务必阅读 uni-app 的开发指南**
https://uniapp.dcloud.io/frame

## 1. 新增组件文件
根据组件类型，在对应的文件夹下建立组件

- 公用组件 `/frontend/uni/components/common` 
- 微信小程序专用组件 `/frontend/uni/components/wx` 
- ...

根据示例，我们在 `/frontend/uni/components/common` 下新建组件文件夹 `countdown-discount/index.vue`
即全路径：`/frontend/uni/components/common/countdown-discount/index.vue`

```html
// countdown-discount/index.vue

<template>
  <div class="uni-cm-countdown-discount">
    <h2>这是新增的 uni-cm-countdown-discount 组件</h2>
    <p>开始倒计时: {{ time }}</p>
  </div>
</template>
<script>
export default {
  name: 'uni-cm-countdown-discount',
  data() {
    return {
      time: 5000
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
```

#### 组件文件的开发规范
1. `template` 部分最外层类名 和 组件 `name` 属性，必须以 `uni-cm-*` 开头，根据组件类型，`-cm` 可替换成 `-wx` 等
- `cm`: 表示 `common` 类型的组件
- `wx`: 表示 `wx` 类型的组件
- ...

2. 虽然 `uni-app` 官方推荐使用小程序的标签去开发 `html` 的部分，但是由于这些组件需要直接拷贝至可视化页面中作为组件使用，所以除了 `uni-app` 内置的基础组件(如: `scroll-view`、`image`) 其余标签请使用 `html` 标签

## 2. 注册成全局组件
2.1 在 `/frontend/uni/components/index.js` 中引入组件并注册，并对外暴露组件的相关信息

> 这里注册的组件是给可视化工具使用的
```js
import cmCountdownDiscount from './common/countdown-discount';
Vue.component('cmCountdownDiscount', cmCountdownDiscount);

export default [{
  id: 'cmCountdownDiscount', // 组件标识，即上面的组件名
  name: '倒计时折扣', // 展示在可视化页面中的名称
  noConfig: true, // 是否有表单配置 config.vue    ！！注意：如果组件没有配置项则传这个字段，默认是不需要传，这里只是举例
}]
```

> 这里的注册时给 uni 注册全局组件用的
```js
import cmCountdownDiscount from './components/common/countdown-discount';
Vue.component('cmCountdownDiscount', cmCountdownDiscount);
```


2.2 在 `/frontend/uni/pages/component-view/index.vue` 中添加组件
```html
<template>
	<view class="p-component-view">
    <h1>这里是用来查看组件效果的页面</h1>
    <cmCountdownDiscount />
	</view>
</template>
```

#### 开发规范
- `import` 的变量名必须用驼峰形式，并且以组件类型的标识（如： cm）开头
- 注册的组件名必须与变量名相同
- `style` 中的各种通用属性（如：背景色、字体色、圆角、间距 等）必须使用变量

## 3. 在开发者工具查看组件效果
在开发时，我们需要实时地查看组件的展示效果。同时，为了实时调试多个平台的兼容性问题，我们需要同时打开多个小程序开发者工具

> 由于组件的跨端主要使用 uni-app 进行开发，所以需要使用 HBuilderX 的编译器进行多平台编译

1. [下载并打开 HBuilderX](https://www.dcloud.io/hbuilderx.html)
2. 将项目文件夹 `frontend/uni` 用 HBuilderX 打开
3. 在 HBuilderX 顶栏点击 "运行" -> "运行到小程序模拟器" -> 选择相应要查看的开发者工具（**至少同时打开 微信 和 支付宝 的开发者工具去调试兼容**）
4. 根据 HBuilderX 控制台的提示操作查看项目运行


## 4. 让组件可以在可视化页面中使用表单配置
> 参考：可参考 `common/entry-list` 下的组件和配置

在可视化页面中，我希望各个组件可以用对应的配置表单去修改某些指定的配置项，并且在视图中实时改变效果。
这里配置表单的开发需要配合 `nodejs` 和 运行 `frontend/visual` 项目进行开发和调试

#### 步骤
1. 在组件文件夹内新建 `config.vue`，即 `/frontend/uni/components/common/countdown-discount/config.vue`
2. 按 vue 规范书写单文件组件的内容, 并且使用纯正的 h5 书写。因为这个文件的内容是仅展示在可视化页面中的
    > `template` 部分最外层类名 和 组件 `name` 属性，必须以 `uni-config-*` 开头 + 组件名
3. 根据可视化工具中的全局组件，编写配置表单
    > 可视化提供的全局组件, 请自行查看 `/frontend/visual/src/components-visual/` 下的组件
    - 后续会把可视化的全局组件整理出来
4. 注册 vuex module
   4.1 在 `frontend/uni/src/vuex/modules` 下创建文件 `countdown-discount.js`， 并注册到 `vuex.store` 中
   
    ```js
    // countdown-discount.js
    export default {
      namespaced: true, // 命名空间必须开启
      state: {
        pages: {
          // 当本组件有多个页面可能用到的时候，就需要以页面标识为 key，把配置的参数放到对应页面下
          // 如果本组件在整个项目中只会出现一次，可以直接把数据放在 state 下，不用套在对应的页面标识中
          index: {
            startTime: 3000, // 倒数开始时间
          }
        }
      },
      getters: {
        // 由于表单的配置都是依赖于当前可视化的页面，所以需要由 rootGetters 获取到当前页面
        startTime: (state, getters, rootState, rootGetters) => {
          const current = state.pages[rootGetters.currentPage];

          return current.startTime;
        }
      },
      mutations: {
        UPDATE_START_TIME(state, { startTime, pageId }) {
          state.pages[pageId].startTime = startTime;
        }
      },
      actions: {
        updateStartTime({ rootGetters, commit }, payload) {
          commit('UPDATE_START_TIME', {
            ...payload,
            pageId: rootGetters.currentPage
          })
        }
      }
    }


    // frontend/uni/src/vuex/modules/index.js
    import cmEntryList from './entry-list';
    import cmCountdownDiscount from './countdown-discount';

    export default {
      cmEntryList,
      cmCountdownDiscount,
    }
    ```

    4.2 在 `/frontend/uni/components/index.js` 中，把 `config.vue` 也进行注册
      ```js
      import cmCountdownDiscount from './common/countdown-discount';
      import cmCountdownDiscountConfig from './common/countdown-discount/config.vue';
      
      Vue.component('cmCountdownDiscount', cmCountdownDiscount);
      Vue.component('cmCountdownDiscountConfig', cmCountdownDiscountConfig);
      ```

  5. 修改 index 组件上写死的代码，把涉及到配置项的部分转移到 vuex 中
      ```html
      <template>
        <div class="uni-cm-countdown-discount">
          <h2>这是新增的 uni-cm-countdown-discount</h2>
          <p>开始倒计时: {{ startTime }}s</p>
        </div>
      </template>
      <script>
      import { mapGetters } from 'vuex';

      export default {
        name: 'uni-cm-countdown-discount',
        data() {
          return {
            time: 5000
          }
        },
        computed: {
          ...mapGetters({
            startTime: 'cmCountdownDiscount/startTime'
          })
        }
      }
      </script>
      ```

表单编写
必须配合 vuex 编写表单修改的存值











# 注意事项





TODO
- 以 cli 形式快速创建组件文件
