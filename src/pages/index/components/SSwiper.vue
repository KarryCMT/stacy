<template>
  <view class="s-swiper-container">
    <swiper
      class="swiper"
      circular
      :indicator-dots="false"
      :autoplay="true"
      :interval="3000"
    >
      <swiper-item class="swiper-item" v-for="item in imageList" :key="item.id">
        <image
          class="image"
          :style="{ height: item.height }"
          :src="item.path"
        />
      </swiper-item>
    </swiper>
    <!-- 圆点 -->
    <view>
      <view></view>
    </view>
  </view>
</template>
<script>
import loginBgOne from '@/static/image/index/login-bg-1.png';
import loginBgTwo from '@/static/image/index/login-bg-2.png';
import loginBgThree from '@/static/image/index/login-bg-3.png';
export default {
  name: 'SSwiper',
  data() {
    return {
      imageList: [
        {
          id: 1,
          path: loginBgOne,
          height: '842rpx',
        },
        {
          id: 2,
          path: loginBgTwo,
          height: '1031rpx',
        },
        {
          id: 3,
          path: loginBgThree,
          height: '984rpx',
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.s-swiper-container {
  .swiper {
    width: 100%;
    height: 1000rpx;
    .swiper-item {
      display: flex;
      justify-content: center;
      .image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
