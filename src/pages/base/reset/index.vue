<template>
  <!-- 重置密码 -->
  <view class="reset-container">
    <NavBar :is-back="true" @height="(v) => (height = v)"/>
    <view class="title-box" :style="{marginTop:height+90+'px'}">
      <text class="text">重置密码</text>
      <text class="desc"
        >重置代码发送到您的电子邮件。请输入代码并创建新密码。</text
      >
    </view>
    <view class="form-box">
      <form @submit="formSubmit">
        <view class="form-item">
          <input
            placeholder-class="phc"
            placeholder="重置代码"
            maxlength="18"
            name="code"
          />
        </view>
        <view class="form-item">
          <input
            placeholder-class="phc"
            placeholder="新的密码"
            maxlength="18"
            name="newPassword"
          />
        </view>
        <view class="form-item">
          <input
            placeholder-class="phc"
            placeholder="确认密码"
            maxlength="18"
            name="confirmPassword"
          />
        </view>
        <view class="form-btn">
          <button form-type="submit">更改密码</button>
        </view>
      </form>
    </view>
  </view>
</template>

<script>
import NavBar from '@/components/NavBar/index';
export default {
  name: 'reset',
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
      console.log(value);
      uni.navigateTo({
        url:`/pages/base/success/index`
      })
    },
  },
};
</script>

<style lang="scss">
.reset-container {
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
      display: flex;
      align-items: center;
      padding-left: 33rpx;
      box-sizing: border-box;
      input {
        font-size: 32rpx;
        font-family: Montserrat;
        font-weight: 500;
        color: #020433;
      }
      .phc {
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #95a0b6;
      }
    }
    .form-item:nth-child(2),
    .form-item:nth-child(3) {
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
