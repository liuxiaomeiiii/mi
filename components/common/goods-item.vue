<template>
  <view class="good">
    <image class="pic" :src="good.cover"></image>
    <text class="title">
      {{ good.title }}
    </text>
    <p class="desc">
      {{ good.desc }}
    </p>
    <div class="px-2 row a-end">
      <div class="flex-row">
        <text class="font" style="color: #fd6801">￥</text>
        <text style="color: #fd6801; font-size: 18px">{{ good.pprice }}</text>
      </div>
      <text class="line-through text-light-muted ml-1">
        ￥{{ good.oprice }}
      </text>
    </div>
  </view>
</template>

<script>
export default {
  props: {
    good: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.good {
  width: 49%;
  display: inline-block;
  &:nth-child(odd) {
    margin-right: 1%;
  }
  .pic {
    height: 220px;
    width: 100%;
  }
  .title,
  .desc {
    padding-left: 12px;
  }
  .title {
    font-size: 14px;
  }
  .desc {
    font-size: 12px;
  }
}
</style>
