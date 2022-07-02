<template>
  <view class="card-item-container" @click="onHandle(index)">
    <view :class="[isActive ? 'line-active' : 'line']"></view>
    <view class="cover">
      <image
        class="pic"
        :src="item.picList"
      />
      <image class="star" :src="item.star ? yesStarPng : noStarPng" />
    </view>
    <view class="is-verified">
      <image
        class="verified-icon"
        :src="item.isVerified ? verifiedPng : verifiedPng"
      />
      <text class="is-auth">已实名认证</text>
      <text class="count">{{ item.count }} 房</text>
    </view>
    <view class="desc">{{ item.desc }}</view>
    <view class="money">
      <text class="number">¥{{ item.money }}</text>
      <text class="pay">{{ onPayDateType(item.payDateType) }}</text>
    </view>
    <view class="state">
      <text class="age">{{ item.state ? '目前有效' : '目前无效' }}</text>
      <view class="point"></view>
      <text class="time">{{ item.time }}个月租期</text>
    </view>
  </view>
</template>
<script>
import morePng from '@/static/icon/more-icon.png';
import verifiedPng from '@/static/icon/verified-icon.png';
import boyPng from '@/static/icon/boy-icon.png';
import girlPng from '@/static/icon/girl-icon.png';
import yesStarPng from '@/static/icon/yes-star.png';
import noStarPng from '@/static/icon/no-star.png';
export default {
  name: 'CardItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      morePng,
      verifiedPng,
      boyPng,
      girlPng,
      yesStarPng,
      noStarPng,
    };
  },
  created() {},
  methods: {
    onHandle(index) {
      this.$emit('change', index);
    },
    onSexClass(type) {
      switch (type) {
        case 0:
          return 'girlSize';
        case 1:
          return 'boySize';
        case 2:
          return 'otherSize';
        default:
          break;
      }
    },
    onSex(type) {
      switch (type) {
        case 0:
          return girlPng;
        case 1:
          return boyPng;
        case 2:
          return girlPng;
        default:
          break;
      }
    },
    onPayDateType(type) {
      switch (type) {
        case 1:
          return '月度';
        case 2:
          return '季度';
        case 3:
          return '年度';
        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.card-item-container {
  width: 398rpx;
  background: #ffffff;

  .line-active {
    width: 100%;
    height: 8rpx;
    background: #0f73ee;
  }
  .line {
    width: 100%;
    height: 8rpx;
    background: #fff;
  }
  .cover {
    width: 100%;
    position: relative;
    .pic {
      margin-top: 8rpx;
      width: 100%;
      height: 256rpx;
    }
    .star {
      position: absolute;
      right: 20rpx;
      top: 20rpx;
      width: 48rpx;
      height: 45rpx;
    }
  }

  .is-verified {
    display: flex;
    align-items: center;
    padding: 10rpx 0;
    .verified-icon {
      width: 24rpx;
      height: 28rpx;
    }
    .is-auth,
    .count {
      margin-left: 13rpx;
      font-size: 20rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #08c299;
    }
    .count {
      margin-left: 21rpx;
    }
  }
  .desc {
    font-size: 28rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #020433;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .money {
    margin-top: 4rpx;
    font-size: 28rpx;
    font-family: PingFang;
    font-weight: 500;
    color: #020433;
    .pay {
      margin-left: 17rpx;
    }
  }
  .state {
    margin-top: 4rpx;
    display: flex;
    align-items: center;
    .age {
      font-size: 26rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #404b69;
    }
    .point {
      margin-left: 21rpx;
      width: 6rpx;
      height: 6rpx;
      background: #404b69;
      border-radius: 50%;
    }
    .time {
      margin-left: 10rpx;
      font-size: 26rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #404b69;
    }
  }
}
</style>
