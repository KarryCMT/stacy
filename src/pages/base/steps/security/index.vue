<template>
  <!-- steps -->
  <view class="steps-container">
    <NavBar :is-back="true" @height="(v) => (height = v)" />
    <ProgressBar :width="100" :top="height" />

    <view class="title-box">
      <text class="text">验证码</text>
      <text class="text-mini text-mini-active">我们给你发了一个验证码</text>
      <text class="text-mini">请在下面输入</text>
    </view>
    <view class="form-box">
      <view class="form-item">
        <input maxlength="1" name="username" />
      </view>
      <view class="form-item">
        <input maxlength="1" name="username" />
      </view>
      <view class="form-item">
        <input maxlength="1" name="username" />
      </view>
      <view class="form-item">
        <input maxlength="1" name="username" />
      </view>
      <view class="form-item">
        <input maxlength="1" name="username" />
      </view>
      <view class="form-item">
        <input maxlength="1" name="username" />
      </view>
    </view>
    <view class="desc">这有助于我们对每个用户进行身份验证</view>
    <view class="sent-code">
      <text class="l">没有接收到验证码?</text>
      <text class="r">重新发送</text>
    </view>
    <view class="footer-box">
      <button @click="onSuccess">完成</button>
    </view>
  </view>
</template>

<script>
import NavBar from '@/components/NavBar/index';
import ProgressBar from '@/components/ProgressBar/index';
import {Register} from "@/api/index.js";
export default {
  name: 'steps',
  components: {
    NavBar,
    ProgressBar,
  },
  data() {
    return {
      height: 0,
    };
  },
  methods: {
    formSubmit({ detail }) {
      const { value } = detail;
    },
   async onSuccess() {
     const register = uni.getStorageSync('register');
     const {code,data} = await Register({...register,photo:register.photo.join(',')})
     if (code===200) {
      uni.showToast({
        title:data.message,
        icon:'none'
      })
     }

      // uni.navigateTo({
      //   url: `/pages/base/password/index`,
      // });
    },
  },
};
</script>

<style lang="scss">
.steps-container {
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
    .text-mini {
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #020433;
    }
    .text-mini-active {
      margin-top: 47rpx;
    }
  }
  .form-box {
    margin-top: 89rpx;
    padding: 0 48rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .form-item {
      width: 64rpx;
      height: 99rpx;
      background: #ffffff;
      border-bottom: 4rpx solid #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        height: 100%;
        width: 100%;
        font-size: 72rpx;
        font-family: Montserrat;
        font-weight: 500;
        color: #020433;
        text-align: center;
      }
    }

    .form-btn {
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
      .not-password:active,
      button:active {
        opacity: 0.5;
      }
    }
  }
  .desc {
    margin-top: 38rpx;
    width: 100%;
    text-align: center;
    font-size: 24rpx;
    font-family: PingFang;
    font-weight: 500;
    color: #404b69;
  }
  .sent-code {
    margin-top: 141rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    .l {
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #020433;
    }
    .r {
      margin-left: 8rpx;
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #0f73ee;
    }
    .r:active {
      opacity: 0.5;
    }
  }
  .footer-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 184rpx;
    background: #ffffff;
    padding: 0 48rpx;
    box-sizing: border-box;
    button {
      width: 100%;
      height: 92rpx;
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
</style>
