<template>
  <view class="progress-bar-container" :style="{ width: width + '%',marginTop:top+'px' }"> </view>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: {
    width: {
      type: Number,
      default: 20,
    },
    top: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.progress-bar-container {
  height: 4rpx;
  background: linear-gradient(90deg, #0f73ee 0%, #c644fc 100%);
}
</style>
