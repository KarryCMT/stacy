<template>
  <view class="home-container">
    <view class="content">
      <CardItem v-for="(item, index) in itemList" :item="item" :key="index" />
    </view>
    <Tool />
  </view>
</template>
<script>
import CardItem from './components/CardItem.vue';
import Tool from '@/components/Tool/index';
export default {
  name: 'Home',
  components: {
    CardItem,
    Tool
  },
  data() {
    return {
        itemList:[
            {
                id:1,
                username:'Boy Lee',
                picUrl:'https://picx.zhimg.com/v2-ab5998b2315433a05a2cc58877f651e8_im.jpg?source=32738c0c',
                sex:1,
                star:true,
                type:1,//1 租客 2 房东
                age:22,
                count:2,
                desc:'非常漂亮的两房户型，独立卫生间，冰箱、洗衣机、空调、Wifi、1房间闲置求合租。',
                money:899,
                payDateType:1, //1 月度 2季度 3年度 
                state:true,// 状态
                time:7,
                isVerified:true,
                picList:[
                    'https://pic1.zhimg.com/80/v2-2296fb2bbd988fc36bbeb3afba87a949_1440w.jpg?source=1940ef5c',
                    'https://pic1.zhimg.com/80/v2-2296fb2bbd988fc36bbeb3afba87a949_1440w.jpg?source=1940ef5c',
                    'https://pic1.zhimg.com/80/v2-2296fb2bbd988fc36bbeb3afba87a949_1440w.jpg?source=1940ef5c',
                    'https://pic1.zhimg.com/80/v2-2296fb2bbd988fc36bbeb3afba87a949_1440w.jpg?source=1940ef5c',
                ]
            },
             {
                id:2,
                username:'Susie Jenkins',
                picUrl:'https://picx.zhimg.com/v2-ab5998b2315433a05a2cc58877f651e8_im.jpg?source=32738c0c',
                sex:0,// 0 女 1男 2保密
                star:false,
                type:1,//1 租客 2 房东
                age:28,
                count:1, 
                desc:'非常漂亮的两房户型，独立卫生间，1房间闲置求合租。',
                money:1700,
                payDateType:2, //1 月度 2季度 3年度 
                state:true,// 状态
                time:7,
                isVerified:true,
                picList:[
                    'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
                    'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
                    'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
                    'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
                ]
            },
             {
                id:3,
                username:'Jeremy Lawrence',
                picUrl:'https://picx.zhimg.com/v2-ab5998b2315433a05a2cc58877f651e8_im.jpg?source=32738c0c',
                sex:0,
                star:false,
                type:2,//1 租客 2 房东
                age:22,
                count:2,
                desc:'非常漂亮的两房户型，独立卫生间，1房间闲置求合租。',
                money:899,
                payDateType:1, //1 月度 2季度 3年度 
                state:true,// 状态
                time:7,
                isVerified:true,
                picList:[
                    'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
                    'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
                    'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
                    'https://pica.zhimg.com/80/v2-78c68e9e48bda346d1857c534e64029f_1440w.jpg?source=1940ef5c',
                ]
            },
        ]
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.home-container{
    width: 100%;
}
</style>
