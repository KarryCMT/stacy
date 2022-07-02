<template>
  <view class="map-container">
    <view class="map">
      <map
        style="width: 100%; height: 100%"
        :latitude="latitude"
        :longitude="longitude"
        :markers="covers"
      />
    </view>
    <view class="footer"> </view>
    <view class="close">
      <image :src="closePng" />
    </view>
    <Tool type="filter" offset="592" />
  </view>
</template>
<script>
import Tool from '@/components/Tool/index';
import location from '@/static/icon/location.png';
import closePng from '@/static/icon/close-icon.png';
export default {
  name: 'Home',
  components: {
    Tool,
  },
  data() {
    return {
      id: 0, // 使用 marker点击事件 需要填写id
      title: 'map',
      closePng,
      latitude: 39.909,
      longitude: 116.39742,
      covers: [
        {
          latitude: 39.909,
          longitude: 116.39742,
          iconPath: location,
        },
        {
          latitude: 39.9,
          longitude: 116.39,
          iconPath: location,
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
          picList: [
            'https://pic1.zhimg.com/80/v2-2296fb2bbd988fc36bbeb3afba87a949_1440w.jpg?source=1940ef5c',
            'https://pic1.zhimg.com/80/v2-2296fb2bbd988fc36bbeb3afba87a949_1440w.jpg?source=1940ef5c',
            'https://pic1.zhimg.com/80/v2-2296fb2bbd988fc36bbeb3afba87a949_1440w.jpg?source=1940ef5c',
            'https://pic1.zhimg.com/80/v2-2296fb2bbd988fc36bbeb3afba87a949_1440w.jpg?source=1940ef5c',
          ],
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
          picList: [
            'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
            'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
            'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
            'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
          ],
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
          picList: [
            'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
            'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
            'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
            'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
          ],
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.map-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .footer {
    width: 100%;
    height: 544rpx;
    background-color: #fff;
  }
  .map {
    width: 100%;
    height: 1080rpx;
  }
  .close {
    position: fixed;
    left: 48rpx;
    bottom: 592rpx;
    height: 84rpx;
    width: 84rpx;
    background: #ffffff;
    box-shadow: 0px 10rpx 20rpx 0px rgba(0, 0, 0, 0.08);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 24rpx;
      height: 24rpx;
    }
  }
   .close:active{
    opacity: .5;
   }
}
</style>
