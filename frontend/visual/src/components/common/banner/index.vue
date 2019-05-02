<template>
  <div class="cm-banner">
    <section class="cm-banner-wrapper">
      <swiper
        class="swiper"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        :circular="true"
      >
        <swiper-item>
          <view class="swiper-item uni-bg-red"></view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-green"></view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-blue"></view>
        </swiper-item>
      </swiper>
    </section>
  </div>
</template>

<script>
  export default {
    name: "cm-banner",
    data() {
      return {
        type: "banner",
        count: 1,
        background: ['color1', 'color2', 'color3'],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 500
      };
    }
  };
</script>

<style lang="scss">
  .cm-banner {
    padding: 12px 16px;
  }
  .cm-banner-wrapper {
    width: calc(100% - $fm-gap-big * 2);
  }
  .swiper {
    overflow: hidden;
    height: 120px !important;
    border-radius: $fm-radius;
    &-item-img {
      width: 100%;
    }
  }
  .swiper-item {
    height: 100%;
    border-radius: $fm-radius;
  }
  .uni-bg-red {
    background: #fb8787;
  }
  .uni-bg-green {
    background: #c9dc84;
  }
  .uni-bg-blue {
    background: #a0d5f1;
  }
</style>
