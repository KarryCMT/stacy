<template>
  <view class="map-container">
    <Search v-model="keywords" />
    <view class="map">
      <map
        style="width: 100%; height: 100%"
        :latitude="mapCenter.latitude"
        :longitude="mapCenter.longitude"
        :markers="markers"
        @callouttap="onHandleMapMarkers"
      >
        <cover-view slot="callout">
          <block v-for="(item, index) in markers" :key="index">
            <cover-view
              :class="[
                currentSwiperIndex === item.id ? 'callout-active' : 'callout',
              ]"
              :marker-id="item.id"
            >
              <cover-view
                :class="[
                  currentSwiperIndex === item.id ? 'title-active' : 'title',
                ]"
                >¥9900</cover-view
              >
            </cover-view>
          </block>
        </cover-view>
      </map>
    </view>
    <view class="footer">
      <swiper
        class="warp"
        :current="currentSwiperIndex"
        previous-margin="32rpx"
        next-margin="288rpx"
      >
        <swiper-item
          class="warp-items"
          v-for="(item, index) in itemList"
          :key="index"
        >
          <CardItem
            :item="item"
            @change="(e) => (currentSwiperIndex = e)"
            :index="item.id"
            :is-active="item.id === currentSwiperIndex"
          />
        </swiper-item>
      </swiper>
    </view>
    <Close @back="onBack" />
    <Filter type="filter" offset="592" />
  </view>
</template>
<script>
import Filter from '@/components/Filter/index';
import Search from '@/components/Search/index';
import Close from '@/components/Close/index';
import location from '@/static/icon/location.png';
import mapBg from '@/static/icon/map-bg.png';
import verifiedPng from '@/static/icon/verified-icon.png';
import CardItem from './components/CardItem.vue';
export default {
  name: 'Home',
  components: {
    Filter,
    Search,
    CardItem,
    Close,
  },
  data() {
    return {
      mapBg,
      keywords: '',
      currentSwiperIndex: 0,
      verifiedPng,
      mapCenter: {
        latitude: 29.572666,
        longitude: 106.53281,
      },
      markers: [
        {
          id: 1,
          latitude: 29.574179,
          longitude: 106.535092,
          iconPath: location,
          width: 0,
          height: 0,
          customCallout: {
            display: 'ALWAYS', //
          },
        },
        {
          id: 2,
          latitude: 29.571921,
          longitude: 106.529577,
          iconPath: location,
          width: 0,
          height: 0,
          customCallout: {
            display: 'ALWAYS', //
          },
        },
        {
          id: 3,
          latitude: 29.564455,
          longitude: 106.535328,
          iconPath: location,
          joinCluster: true,
          width: 0,
          height: 0,
          customCallout: {
            display: 'ALWAYS',
          },
        },
        {
          id: 4,
          latitude: 29.545901,
          longitude: 106.530835,
          width: 0,
          height: 0,
          iconPath: location,
          customCallout: {
            display: 'ALWAYS',
          },
        },
      ],
      itemList: [
        {
          id: 1,
          username: 'Boy Lee',
          picUrl:
            'https://picx.zhimg.com/v2-ab5998b2315433a05a2cc58877f651e8_im.jpg?source=32738c0c',
          sex: 1,
          star: true,
          type: 1, //1 租客 2 房东
          age: 22,
          count: 2,
          desc: '非常漂亮的两房户型，独立卫生间，冰箱、洗衣机、空调、Wifi、1房间闲置求合租。',
          money: 899,
          payDateType: 1, //1 月度 2季度 3年度
          state: true, // 状态
          time: 7,
          isVerified: true,
          picList:
            'https://pic1.zhimg.com/80/v2-2296fb2bbd988fc36bbeb3afba87a949_1440w.jpg?source=1940ef5c',
        },
        {
          id: 2,
          username: 'Susie Jenkins',
          picUrl:
            'https://picx.zhimg.com/v2-ab5998b2315433a05a2cc58877f651e8_im.jpg?source=32738c0c',
          sex: 0, // 0 女 1男 2保密
          star: false,
          type: 1, //1 租客 2 房东
          age: 28,
          count: 1,
          desc: '非常漂亮的两房户型，独立卫生间，1房间闲置求合租。',
          money: 1700,
          payDateType: 2, //1 月度 2季度 3年度
          state: true, // 状态
          time: 7,
          isVerified: true,
          picList:
            'https://pic1.zhimg.com/80/v2-2296fb2bbd988fc36bbeb3afba87a949_1440w.jpg?source=1940ef5c',
        },
        {
          id: 3,
          username: 'Jeremy Lawrence',
          picUrl:
            'https://picx.zhimg.com/v2-ab5998b2315433a05a2cc58877f651e8_im.jpg?source=32738c0c',
          sex: 0,
          star: false,
          type: 2, //1 租客 2 房东
          age: 22,
          count: 2,
          desc: '非常漂亮的两房户型，独立卫生间，1房间闲置求合租。',
          money: 899,
          payDateType: 1, //1 月度 2季度 3年度
          state: true, // 状态
          time: 7,
          isVerified: true,
          picList:
            'https://pic1.zhimg.com/80/v2-2296fb2bbd988fc36bbeb3afba87a949_1440w.jpg?source=1940ef5c',
        },
      ],
    };
  },
  watch: {
    keywords: {
      handler(v) {
        console.log(v, 'keywords');
      },
    },
  },
  created() {},
  methods: {
    onHandleMapMarkers({ detail }) {
      this.currentSwiperIndex = detail.markerId;
      const { latitude, longitude } = this.markers.find(
        (i) => i.id === detail.markerId
      );
      this.mapCenter.latitude = latitude
      this.mapCenter.longitude = longitude
    },
    onBack() {
      uni.navigateBack({
        delta: 2,
      });
    },
  },
};
</script>
<style lang="scss">
.map-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .footer {
    width: 100%;
    height: 544rpx;
    background-color: #fff;
    .warp {
      width: 100%;
      height: 100%;
      .warp-items {
        width: 398rpx;
      }
    }
  }
  .map {
    width: 100%;
    height: 1080rpx;
    .callout,
    .callout-active {
      width: 92rpx;
      height: 60rpx;
      background: url('~@/static/icon/map-bg.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      .title {
        margin-top: 13rpx;
        font-size: 28rpx;
        font-family: Montserrat;
        font-weight: bold;
        color: #020433;
      }
      .title-active {
        margin-top: 13rpx;
        font-size: 28rpx;
        font-family: Montserrat;
        font-weight: bold;
        color: #fff;
      }
    }
    .callout-active {
      background: url('~@/static/icon/map-bg-active.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
