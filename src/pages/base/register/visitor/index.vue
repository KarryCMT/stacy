<template>
  <!-- 重置密码 -->
  <view class="visitor-container">
    <NavBar
      :is-back="true"
      bg-color="rgba(255,255,255,0)"
      @height="(v) => (height = v)"
      isWhite
    />
    <view class="content">
      <image :src="visitorPng" />
    </view>
    <view class="login-box">
      <!-- <text class="title">成功！</text> -->
      <text class="desc">如何看待访客？</text>
    </view>
    <view class="item-box">
      <view
        class="items"
        @click="onVisitor"
        v-for="(item, index) in itemList"
        :key="index"
      >
        <image :src="item.isSelect ? yesPng : noPng" />
        <text>{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import NavBar from "@/components/NavBar/index";
import visitorPng from "@/static/image/register/visitor-icon.png";
import yesPng from "@/static/image/register/yes.png";
import noPng from "@/static/image/register/no.png";
export default {
  name: "Visitor",
  components: {
    NavBar,
  },
  data() {
    return {
      visitorPng,
      yesPng,
      noPng,
      height: 0,
      itemList: [
        {
          name: "请不要带外人过来",
          isSelect: false,
          value: 1,
        },
        {
          name: "只有白天",
          isSelect: false,
          value: 2,
        },
        {
          name: "晚上也可以",
          isSelect: false,
          value: 3,
        },
      ],
    };
  },
  methods: {
    onVisitor() {
      uni.navigateTo({
        url: `/pages/base/register/visitor/index`,
      });
    },
  },
};
</script>

<style lang="scss">
.visitor-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 116rpx;
    width: 680rpx;
    height: 680rpx;
    background: url("~@/static/image/success/circle.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 221rpx;
      height: 240rpx;
    }
  }
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      margin-top: 35rpx;
      font-size: 60rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #ffffff;
    }
    .desc {
      font-size: 36rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #ffffff;
    }
  }
  .item-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 64rpx;
    box-sizing: border-box;
    .items {
      margin-top: 32rpx;
      width: 100%;
      height: 112rpx;
      background: #ffffff;
      box-shadow: 0px 4rpx 10rpx 0px rgba(0, 0, 0, 0.05);
      border-radius: 12rpx;
      display: flex;
      align-items: center;
      image {
        margin-left: 26rpx;
        width: 59rpx;
        height: 59rpx;
      }
      text {
        margin-left: 28rpx;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #020433;
      }
      image:active {
        opacity: 0.5;
      }
    }
    .items:active {
      opacity: 0.5;
    }
  }
}
</style>
