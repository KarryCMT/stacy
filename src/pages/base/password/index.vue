<template>
  <!-- 忘记密码 -->
  <view class="password-container">
    <NavBar :is-back="true" />
    <view class="title-box">
      <text class="text">忘记密码？</text>
      <text class="desc">请在下面输入您的电子邮件以接收密码重置邮件</text>
    </view>
    <view class="form-box">
      <form @submit="formSubmit" >
        <view class="form-item">
          <view class="tips">邮箱地址</view>
          <input placeholder="邮箱" maxlength="18" name="email" />
        </view>
        <view class="form-btn">
          <button form-type="submit">发送</button>
        </view>
      </form>
    </view>
  </view>
</template>

<script>
import NavBar from '@/components/NavBar/index';
export default {
  name: 'Password',
  components: {
    NavBar,
  },
  data() {
    return {};
  },
  methods: {
    formSubmit({ detail }) {
      const { value } = detail;
      console.log(value);
      uni.navigateTo({
        url:`/pages/base/reset/index`
      })
    },
  },
};
</script>

<style lang="scss">
.password-container {
  width: 100%;
  height: 100%;
  .title-box {
    margin: 90rpx 0 0 50rpx;
    display: flex;
    flex-direction: column;
    .text {
      font-size: 60rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #020433;
    }
    .desc {
      margin-top: 46rpx;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #404b69;
    }
  }
  .form-box {
    margin-top: 89rpx;
    padding: 0 48rpx;
    .form-item {
      width: 100%;
      height: 108rpx;
      background: #ffffff;
      border: 2rpx solid #f0f0f0;
      border-radius: 12rpx 12rpx 12rpx 12rpx;
      padding: 13rpx 34rpx 13rpx 34rpx;
      box-sizing: border-box;
      .tips {
        font-size: 24rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #404b69;
      }
      input {
        font-size: 32rpx;
        font-family: Montserrat;
        font-weight: 500;
        color: #020433;
      }
    }
    .form-item:nth-child(2) {
      margin-top: 32rpx;
    }
    .form-btn {
      margin-top: 48rpx;
      button {
        width: 100%;
        height: 100rpx;
        background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #ffffff;
      }
      button:active {
        opacity: 0.5;
      }
    }
  }
}
</style>
