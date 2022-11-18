<template>
  <view class="item">
    <image :src="item.titlepic" />
    <view class="info">
      <h3 class="title">{{ item.title }}</h3>
      <p class="desc">{{ item.desc }}</p>
      <p class="price">￥ {{ item.pprice }}</p>
      <p class="num">
        {{ item.comment_num }} 条评论 {{ item.good_num }} 满意
      </p>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  image {
    width: 150px;
    height: 150px;
  }
  .info {
    padding-left: 8px;
    .title {
      font-size: 16px;
      font-weight: 700;
      padding: 4px 0 12px 0;
    }
    .desc,
    .num {
      color: #ccc;
      font-size: 12px;
      &.num {
        transform: scale(0.8);
        margin-left: -24px;
      }
    }
    .price {
      font-weight: 700;
      font-size: 18px;
      padding: 4px 0;
      color: #fd6801;
    }
  }
}
</style>
