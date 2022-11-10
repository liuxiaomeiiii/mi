<template>
  <view class="banner d-flex">
    <image
      style="width: 373upx; height: 530upx; border-right: 2upx solid #f5f5f5"
      lazy-load
      :src="images[0]"
    ></image>
    <view class="d-flex flex-column">
      <image
        lazy-load
        style="width: 375upx; height: 264upx; border-bottom: 2upx solid #f5f5f5"
        :src="images[1]"
      ></image>
      <image
        lazy-load
        style="width: 375upx; height: 264upx"
        :src="images[2]"
      ></image>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    images: {
      default: Array,
      require: true
    }
  },
  data() {
    return {}
  },
  onLoad() {},
  methods: {}
}
</script>

<style lang="scss"></style>
