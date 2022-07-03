<template>
  <!-- target -->
  <view class="target-container">
    <NavBar :is-back="true" @height="(v) => (height = v)" />
    <ProgressBar :top="height" />
    <view class="title-box">
      <text class="text">你的寻找目标</text>
      <text class="text">是什么？</text>
    </view>
    <view class="banner-box">
      <image
        @click="onCity(item.id)"
        :src="item.path"
        v-for="(item, index) in bannerList"
        :key="index"
      />
    </view>
  </view>
</template>

<script>
import NavBar from '@/components/NavBar/index';
import ProgressBar from '@/components/ProgressBar/index';
import btnEntirePlace from '@/static/image/steps/btn_entire_place.png';
import btnRoommate from '@/static/image/steps/btn_roommate.png';
import btnRoom from '@/static/image/steps/btn_room.png';
import btnTenant from '@/static/image/steps/btn_tenant.png';
export default {
  name: 'Target',
  components: {
    NavBar,
    ProgressBar,
  },
  data() {
    return {
      height: 0,
      bannerList: [
        {
          id: 1,
          path: btnEntirePlace,
        },
        {
          id: 2,
          path: btnRoommate,
        },
        {
          id: 3,
          path: btnRoom,
        },
        {
          id: 4,
          path: btnTenant,
        },
      ],
    };
  },
  methods: {
    onCity(id) {
      uni.setStorageSync('register',{
        target:id,
      })
      uni.navigateTo({
        url: `/pages/base/steps/city/index`,
      });
    },
  },
};
</script>

<style lang="scss">
.target-container {
  width: 100%;
  height: 100%;
  .title-box {
    margin: 90rpx 0 0 50rpx;
    display: flex;
    flex-direction: column;
    .text {
      font-size: 60rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
    }
  }
  .banner-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    image {
      margin-top: 60rpx;
      width: 304rpx;
      height: 312rpx;
    }
    image:active {
      opacity: 0.5;
    }
  }
}
</style>
