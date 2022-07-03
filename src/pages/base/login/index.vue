<template>
  <!-- 登录-引导 -->
  <view class="login-container">
    <NavBar :is-back="true"  @height="(v) => (height = v)"/>
    <view class="title-box" :style="{marginTop:height+90+'px'}">
      <text class="text">你好，</text>
      <text class="text">欢迎回来！</text>
    </view>
    <view class="form-box">
      <form @submit="formSubmit" @reset="formReset">
        <view class="form-item">
          <view class="tips">用户名</view>
          <input placeholder="用户名" maxlength="18" name="username" />
        </view>
        <view class="form-item">
          <view class="tips">密码</view>
          <input
            type="password"
            maxlength="20"
            placeholder="密码"
            name="password"
          />
        </view>
        <view class="not-password" @click="notPwd">忘记密码？</view>
        <view class="form-btn">
          <button form-type="submit">登录</button>
        </view>
      </form>
    </view>
    <view class="new-box">
      <view class="new-txt">
        <text class="l">新! </text>
        <text class="r">用授权快速登录</text>
      </view>
    </view>
    <view class="login-text">
      <text>还没有帐号?</text>
      <text class="register" @click="onRegister">马上注册</text>
    </view>
  </view>
</template>

<script>
import NavBar from '@/components/NavBar/index';
export default {
  name: 'Login',
  components: {
    NavBar,
  },
  data() {
    return {
      height:0
    };
  },
  methods: {
    formSubmit({ detail }) {
      const { value } = detail;
    },
    notPwd(){
      uni.navigateTo({
        url:`/pages/base/password/index`
      })
    },
    onRegister(){
        uni.navigateTo({
        url:`/pages/base/steps/target/index`
      })
    }
  },
};
</script>

<style lang="scss">
.login-container {
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
    .not-password {
      margin: 36rpx 0 53rpx 0;
      text-align: right;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #404b69;
    }
    .not-password:active {
      opacity: 0.5;
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
  .new-box {
    margin-top: 84rpx;
    .new-txt {
      display: flex;
      align-items: center;
      justify-content: center;
      .l {
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #ff4949;
      }
      .r {
        margin-left: 6rpx;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #020433;
      }
    }
  }
  .login-text {
    position: fixed;
    bottom: 105rpx;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #404b69;
    .register {
      margin-left: 8rpx;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #0f73ee;
    }
    .register:active {
      opacity: 0.5;
    }
  }
}
</style>
