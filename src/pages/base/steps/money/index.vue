<template>
  <!-- money -->
  <view class="money-container">
    <NavBar :is-back="true" @height="(v) => (height = v)" />
    <ProgressBar :width="60" :top="height" />
    <view class="title-box">
      <text class="text">你的最高花费</text>
      <text class="text">是多少？</text>
    </view>
  </view>
</template>

<script>
import NavBar from '@/components/NavBar/index';
import ProgressBar from '@/components/ProgressBar/index';
export default {
  name: 'money',
  components: {
    NavBar,
    ProgressBar,
  },
  data() {
    return {
      height: 0,
    };
  },
  mounted() {
    console.log(this.height);
  },
  methods: {},
};
</script>

<style lang="scss">
.money-container {
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
}
</style>
