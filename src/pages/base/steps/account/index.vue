<template>
  <!-- account -->
  <view class="account-container">
    <NavBar :is-back="true" @height="(v) => (height = v)" />
    <ProgressBar :width="80" :top="height" />

    <view class="title-box">
      <text class="text">创建你的个人</text>
      <text class="text">账户</text>
    </view>
    <view class="form-box">
      <form @submit="formSubmit" @reset="formReset">
        <view class="form-item">
          <view class="tips">全名</view>
          <input
            placeholder="请输入"
            placeholder-class="plh"
            maxlength="18"
            name="username"
          />
        </view>
        <view class="form-item-sex">
          <view class="sex-title">性别</view>
          <view class="sex-box">
            <view
              :class="[currentSexIndex === index ? 'active' : 'items']"
              v-for="(item, index) in [
                { name: '男', value: 1 },
                { name: '女', value: 2 },
                { name: '保密', value: 3 },
              ]"
              :key="index"
              @click="currentSexIndex = index"
              >{{ item.name }}</view
            >
          </view>
        </view>
        <view class="form-item m-top">
          <view class="date">
            <view class="l">
              <text class="t">入住日期</text>
              <text class="times">{{ 'Jul 6, 1990' }}</text>
            </view>
            <image class="img" :src="dateIcon" />
          </view>
        </view>
        <view class="form-item m-top">
          <view class="tips">联系电话</view>
          <view class="phone-box">
            <view class="tips-txt">86+</view>
            <input
              placeholder="请输入"
              placeholder-class="plh"
              maxlength="11"
              type="number"
              name="phone"
            />
          </view>
        </view>
        <view class="form-item m-top">
          <view class="tips">邮箱地址</view>
          <input
            placeholder="请输入"
            placeholder-class="plh"
            maxlength="18"
            name="username"
          />
        </view>
        <view class="form-item m-top">
          <view class="tips">密码</view>
          <input
            placeholder="请输入"
            placeholder-class="plh"
            type="password"
            maxlength="18"
            name="password"
          />
        </view>
        <view class="form-item m-top">
          <view class="tips">确认密码</view>
          <input
            placeholder="请输入"
            placeholder-class="plh"
            type="password"
            maxlength="18"
            name="password"
          />
        </view>
        <view class="form-item m-top">
          <view class="tips">你的职业是什么？</view>
          <view class="txt">演员 - 模特</view>
        </view>
        <view class="form-item m-top">
          <view class="tips">工作地点</view>
          <view class="txt">重庆</view>
        </view>
        <view class="form-item-textarea m-top">
          <view class="tips">个人简介</view>
          <view class="textarea">
            <textarea
              placeholder="请输入"
              placeholder-class="plh"
              auto-height
              maxlength="100"
            ></textarea>
          </view>
        </view>
      </form>
    </view>
    <view class="upload">
      <view class="warning-txt">
        <text class="l">个人照片</text>
        <text class="r">(最大数量5)</text>
      </view>
      <view class="image-box">
        <image :src="uploadIcon" />
      </view>
    </view>
    <view class="footer-box">
      <button @click="notSecurity">下一步</button>
    </view>
  </view>
</template>

<script>
import NavBar from '@/components/NavBar/index';
import ProgressBar from '@/components/ProgressBar/index';
import dateIcon from '@/static/icon/date-icon.png';
import uploadIcon from '@/static/icon/upload-icon.png';

export default {
  name: 'account',
  components: {
    NavBar,
    ProgressBar,
  },
  data() {
    return {
      height: 0,
      currentSexIndex: 0,
      dateIcon,
      uploadIcon,
    };
  },
  methods: {
    formSubmit({ detail }) {
      const { value } = detail;
    },
    notSecurity() {
      uni.navigateTo({
        url: `/pages/base/steps/security/index`,
      });
    },
  },
};
</script>

<style lang="scss">
.plh {
  font-size: 28rpx;
  font-family: PingFang;
  font-weight: 500;
  color: #95a0b6;
}
.account-container {
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
      .txt {
        font-size: 32rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #020433;
      }

      input {
        font-size: 32rpx;
        font-family: Montserrat;
        font-weight: 500;
        color: #020433;
      }
      .date {
        width: 100%;
        background: #ffffff;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
      .phone-box {
        display: flex;
        align-items: center;
        .tips-txt {
          text-align: center;
          width: 100rpx;
          font-size: 32rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #95a0b6;
        }

        input {
          font-size: 32rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #020433;
        }
      }
    }
    .form-item-sex {
      .sex-title {
        margin-top: 53rpx;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #020433;
      }
      .sex-box {
        margin-top: 37rpx;
        display: flex;
        align-items: center;
        .items,
        .active {
          width: 222rpx;
          height: 80rpx;
          background: #fff;
          border: 2px solid #0f73ee;
          font-size: 26rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #0f73ee;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .items:first-child,
        .active:first-child {
          border-radius: 12rpx 0rpx 0rpx 12rpx;
          border-right: none;
        }

        .items:last-child,
        .active:last-child {
          border-radius: 0px 12rpx 12rpx 0px;
          border-left: none;
        }
        .active {
          background: #0f73ee;
          // border: 2px solid #0f73ee;
          font-size: 26rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #ffffff;
        }
      }
    }
    .form-item-textarea {
      width: 100%;
      // height: 200rpx;
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
      .textarea {
        padding-top: 16rpx;
        textarea {
          font-size: 32rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #020433;
        }
      }
    }
    .m-top {
      margin-top: 32rpx;
    }
    .form-item:nth-child(2) {
      margin-top: 32rpx;
    }
  }
  .upload {
    width: 100%;
    margin-top: 53rpx;
    padding: 0 48rpx 194rpx 48rpx;
    box-sizing: border-box;
    .warning-txt {
      display: flex;
      align-items: center;
      .l {
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #020433;
      }
      .r {
        margin-left: 12rpx;
        font-size: 24rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #fc2f39;
      }
    }
    .image-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      image {
        margin-top: 46rpx;
        width: 306rpx;
        height: 244rpx;
        border-radius: 10rpx;
      }
    }
  }
  .footer-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 9;
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
