<template>
  <view>
    <view class="search">
      <u-icon name="arrow-left" size="24"></u-icon>
      <u-input placeholder="请输入搜索内容">
        <u-icon name="search" size="22"></u-icon>
      </u-input>
      <text class="btn">搜索</text>
    </view>
    <card
      headTitle="热门搜索"
      bodyCover="../../static/images/demo/search-banner.png"
    ></card>
    <view class="btn-wrap">
      <u-button :plain="true" text="镂空"></u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
.search {
  padding: 0 8px;
  display: flex;
  align-items: center;
  .u-input {
    margin: 0 4px;
  }
  .btn {
    font-size: 16px;
    padding-left: 6px;
  }
}
</style>
