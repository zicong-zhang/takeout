<template>
  <div class="cm-store-list">
    <h2 class="nearby-title">附近</h2>
    <nav class="filter-bar">
      <section class="filter-bar-wrapper">
        <div>
          <span>综合排序</span>
        </div>
        <div class="filter-bar-btn-container">
          <div>
            <span>销量高</span>
          </div>
          <div>
            <span>速度快</span>
          </div>
          <div>
            <span>低配送费</span>
          </div>
        </div>
        <div>
          <span>筛选</span>
        </div>
      </section>
    </nav>
    <ul class="store-list">
      <li
        v-for="item in storeList"
        :key="item.id"
        class="store-list-item"
      >
        <img 
          class="store-list-item__logo"
          :src="item.logo"
        />
        <section class="store-list-item__store-info">
          <h3 class="store-list-item__store-info--name">{{ item.storeName }}</h3>
          <div class="store-list-item__desc">
            <div class="store-list-item__explain">

              <!-- 评分 -->
              <span class="store-list-item__ratio">
                <i class="icon icon-star"></i>
                <i class="icon icon-star"></i>
                <i class="icon icon-star"></i>
                <i class="icon icon-star"></i>
                <i class="icon icon-star empty"></i>
                <span class="store-list-item__ratio-count">{{ item.ratio }}</span>
                <span class="store-list-item__sales-volume">月售{{ item.salesVolume }}</span>
              </span>

              <!-- 配送时效 -->
              <span class="store-list-item__aging">
                <span>{{ item.distance }}m</span>
                <i class="vertical-line"></i>
                <span>{{ item.time }}分钟</span>
              </span>
            </div>

            <!-- 各种价格 -->
            <div class="store-list-item__price">
              <span>起送 ¥15</span>
              <i class="vertical-line"></i>
              <span>配送 ¥3</span>
              <i class="vertical-line"></i>
              <span>人均 ¥15</span>
            </div>

            <!-- 各种标签 -->
            <div class="store-list-item__labels">
              <ul class="store-list-item__label-list">
                <li class="store-list-item__label-item red">12减10</li>
                <li class="store-list-item__label-item red">50减20</li>
                <li class="store-list-item__label-item red">70减30</li>
                <li class="store-list-item__label-item green">支持自取</li>
                <li class="store-list-item__label-item green">极速退款</li>
              </ul>
            </div>

          </div>
          <!-- <span class="store-list-item__store-info--desc">{{ item.desc }}</span> -->
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
  const storeList = [];
  const imgList = [
    require("@static/icon_workbench_cases.png"),
    require("@static/icon_workbench_chart.png"),
    require("@static/icon_workbench_customer.png"),
    require("@static/icon_workbench_market.png"),
    require("@static/icon_workbench_products.png"),
    require("@static/icon_workbench_staff.png"),
    require("@static/icon_workbench_wallet.png"),
    require("@static/icon_workbench_market.png"),
    require("@static/icon_workbench_products.png"),
    require("@static/icon_workbench_staff.png"),
    require("@static/icon_workbench_wallet.png")
  ];

  let i = 10;
  while (i--) {
    storeList.push({
      id: `id-${i}`,
      storeName: "华辉拉肠（员村店）",
      logo: imgList[parseInt(Math.random() * 10)],
      desc: "支付宝小程序是手机应用嵌入支付宝客户端的一种方法，有以下特点 一套代码，同时支持 iOS 和 Android，接近原生体验",
      distance: (Math.random() * 1000).toFixed(0),
      time: (Math.random() * 100).toFixed(0),
      ratio: 4.2,
      salesVolume: (Math.random() * 1000).toFixed(0)
    });
  }

  export default {
    name: "cm-store-list",
    data() {
      return {
        storeList: storeList
      };
    }
  };
</script>

<style lang="scss">
  .nearby-title {
    color: $fm-font-color1;
    font-size: $fm-font-size1;
    font-weight: bold;
    text-align-last: left;
    padding-left: $fm-gap-big;
    padding-top: 12px;
  }
  .filter-bar-wrapper {
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 8px 16px;
  }
  .filter-bar-btn-container {
    display: flex;

    div {
      padding: 0 6px;
    }
  }
  .store-list {
    background: #fff;
    padding: 0 16px;
  }
  .store-list-item {
    display: flex;
    padding: 12px 0;
    &__logo {
      flex: none;
      width: $fm-logo-big;
      height: $fm-logo-big;
      box-shadow: 0 0 10px 0 #dedede;
      border-radius: $fm-radius;
      margin-right: 12px;
    }
    &__store-info {
      flex: 1;
      &--name {
        display: block;
        font-weight: bold;
        text-align-last: left;
      }
    }
    &__aging {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: $fm-font-color2;
      span {
        font-size: $fm-font-size4;
      }
    }
    &__desc {
      color: $fm-font-color2;
    }
    &__explain {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }
    &__ratio {
      .icon {
        color: #fd0;
        font-size: $fm-font-size4;
        &:not(:last-child) {
          margin-right: 3px;
        }
      }
      .empty {
        color: #eee;
      }
    }
    &__sales-volume {
        font-size: $fm-font-size4;
      margin-left: $fm-gap-mid;
    }
    &__ratio-count {
        font-size: $fm-font-size4;
      margin-left: $fm-gap-sm;
    }
    &__price {
      display: flex;
      margin-bottom: 4px;
      span {
        font-size: $fm-font-size4;
      }
    }
    &__label-list {
      display: flex;
      flex-flow: wrap;
    }
    &__label-item {
      border: 1px solid #fb8787;
      border-radius: $fm-radius;
      color: #fb8787;
      font-size: $fm-font-size4;
      padding: 0px 5px;
      margin-right: 4px;
    }
    .green {
      color: #3dd0d3;
      border-color: #3dd0d3;
    }
  }
  .vertical-line {
    margin: 0 4px;
  }
</style>
