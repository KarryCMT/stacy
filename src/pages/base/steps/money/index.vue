<template>
  <!-- money -->
  <view class="money-container">
    <NavBar :is-back="true" @height="(v) => (height = v)" />
    <ProgressBar :width="60" :top="height" />
    <view class="title-box">
      <text class="text">你的最高花费</text>
      <text class="text">是多少？</text>
    </view>
    <view class="money-box">
      <view class="txt-box">
        <text class="l">¥ {{ count }}</text>
        <text class="r">每月</text>
      </view>
      <view class="progress-box">
        <ProgressLine :min="0" :max="10000" @change="moveEvent" />
        <view class="start-end">
          <text>¥0</text>
          <text>¥{{ 10000 }}</text>
        </view>
      </view>
    </view>
    <view class="title-box">
      <text class="text">你的入住日期</text>
      <text class="text">是什么？</text>
    </view>
    <view class="time-box">
      <picker
        mode="date"
        :value="stayDate"
        :start="startDate"
        :end="endDate"
        @change="bindDateChange"
      >
        <view class="date">
          <view class="l">
            <text class="t">入住日期</text>
            <text class="times">{{ titleTime || '请选择' }}</text>
          </view>
          <image class="img" :src="dateIcon" />
        </view>
      </picker>
    </view>
    <view class="footer-box">
      <button @click="onNext">下一步</button>
    </view>
  </view>
</template>

<script>
import NavBar from '@/components/NavBar/index';
import ProgressBar from '@/components/ProgressBar/index';
import ProgressLine from '@/components/ProgressLine/index';
import dateIcon from '@/static/icon/date-icon.png';
export default {
  name: 'money',
  components: {
    NavBar,
    ProgressBar,
    ProgressLine,
  },
  data() {
    const currentDate = this.getDate({
      format: true,
    });
    return {
      dateIcon,
      height: 0,
      count: 0,
      stayDate: currentDate,
      titleTime:''
    };
  },
  computed: {
    startDate() {
      return this.getDate('start');
    },
    endDate() {
      return this.getDate('end');
    },
  },
  mounted() {},
  methods: {
    moveEvent(e) {
      this.count = e * 100;
    },
    onNext() {
      const register = uni.getStorageSync('register');
      if (register) {
        Object.assign(register, {
          maxMoney: this.count,
          stayDate: Date.parse(this.stayDate+` 00:00:00`),
        });
        uni.setStorageSync('register', register);
      }
      uni.navigateTo({
        url: `/pages/base/steps/account/index`,
      });
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === 'start') {
        year = year - 60;
      } else if (type === 'end') {
        year = year + 2;
      }
      month = month > 9 ? month : '0' + month;
      day = day > 9 ? day : '0' + day;
      return `${year}-${month}-${day}`;
    },
    bindDateChange({ detail }) {
      this.stayDate = detail.value;
      const [year, month, day] = detail.value.split('-');
      this.titleTime = `${month}月${day}日, ${year}`;
    },
  },
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
  .money-box {
    width: 100%;
    padding: 0 48rpx;
    box-sizing: border-box;
    .txt-box {
      margin-top: 40rpx;
      .l {
        font-size: 48rpx;
        font-family: Montserrat;
        font-weight: bold;
        color: #0f73ee;
      }
      .r {
        margin-left: 12rpx;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #020433;
      }
    }
    .progress-box {
      margin-top: 75rpx;
      width: 100%;
      .start-end {
        margin-top: 20rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 26rpx;
        font-family: Montserrat;
        font-weight: 400;
        color: #404b69;
      }
    }
  }
  .time-box {
    margin-top: 45rpx;
    padding: 0 48rpx;
    box-sizing: border-box;
    .date {
      width: 100%;
      height: 108rpx;
      background: #ffffff;
      border: 2rpx solid #f0f0f0;
      border-radius: 12rpx 12rpx 12rpx 12rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32rpx;
      box-sizing: border-box;
      .l {
        display: flex;
        flex-direction: column;
        .t {
          font-size: 24rpx;
          font-family: PingFang;
          font-weight: 500;
          color: #404b69;
        }
        .times {
          font-size: 32rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #020433;
        }
      }
      .img {
        width: 48rpx;
        height: 48rpx;
      }
      .img:active {
        opacity: 0.5;
      }
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
