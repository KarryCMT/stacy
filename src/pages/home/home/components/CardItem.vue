<template>
  <view class="card-item-container">
    <view class="header">
      <view class="left">
        <image class="url" :src="item.picUrl" />
        <view class="header-content">
          <view class="t">
            <text class="username">{{ item.username }}</text>
            <image
              class="verified"
              :src="item.isVerified ? verifiedPng : verifiedPng"
            />
          </view>
          <view class="b">
            <image :class="[onSexClass(item.sex)]" :src="onSex(item.sex)" />
            <text class="age">{{ item.age }}</text>
            <view class="point"></view>
            <text class="type">{{ item.type === 1 ? '租客' : '房东' }}</text>
          </view>
        </view>
      </view>
      <image class="more" :src="morePng" />
    </view>
    <view class="wrap">
      <swiper class="wrap-box" circular indicator-dots :autoplay="false">
        <swiper-item
          class="warp-items"
          v-for="(pic, index) in item.picList"
          :key="index"
        >
          <image :src="pic" />
        </swiper-item>
      </swiper>
      <image class="star" :src="item.star ? yesStarPng : noStarPng" />
    </view>
    <view class="footer">
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
  width: 100%;
  height: 892rpx;
  background: #ffffff;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 128rpx;
    padding: 0 48rpx;
    .left {
      display: flex;
      .url {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
      }
      .header-content {
        margin-left: 32rpx;
        display: flex;
        flex-direction: column;
        .t {
          display: flex;
          align-items: center;
          .username {
            font-size: 28rpx;
            font-family: Montserrat;
            font-weight: 500;
            color: #020433;
          }
          .verified {
            margin-left: 17rpx;
            width: 24rpx;
            height: 28rpx;
          }
        }
        .b {
          display: flex;
          align-items: center;
          .girlSize {
            width: 21rpx;
            height: 30rpx;
          }
          .boySize {
            width: 30rpx;
            height: 30rpx;
          }
          .otherSize {
            width: 30rpx;
            height: 30rpx;
          }
          .age {
            margin-left: 14rpx;
            font-size: 26rpx;
            font-family: PingFang;
            font-weight: 500;
            color: #404b69;
          }
          .point {
            margin-left: 20rpx;
            width: 6rpx;
            height: 6rpx;
            background: #404b69;
            border-radius: 50%;
          }
          .type {
            margin-left: 10rpx;
            font-size: 26rpx;
            font-family: PingFang;
            font-weight: 500;
            color: #404b69;
          }
        }
      }
    }
    .more {
      width: 32rpx;
      height: 8rpx;
    }
  }
  .wrap {
    width: 100%;
    height: 480rpx;
    position: relative;
    .wrap-box {
      width: 100%;
      height: 100%;
      .warp-items {
        width: 100%;
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .star {
      position: absolute;
      right: 20rpx;
      top: 20rpx;
      width: 48rpx;
      height: 45rpx;
    }
  }
  .footer {
    padding: 0 48rpx;
    .is-verified {
      display: flex;
      align-items: center;
      padding: 26rpx 0;
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
      font-size: 36rpx;
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
      margin-top: 6rpx;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #020433;
      .pay {
        margin-left: 17rpx;
      }
    }
    .state {
      margin-top: 6rpx;
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
}
</style>
