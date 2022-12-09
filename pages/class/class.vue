<template>
  <view>
    <search-header v-model="value" @search="search"></search-header>
    <view class="classification">
      <view class="left">
        <scroll-view class="left-scroll" style="height: 100vh" scroll-y="true">
          <view
            class="item left-scroll-item"
            :class="currentIndex === i ? 'current' : ''"
            @click="currentIndex = i"
            v-for="(item, i) in cate"
            :key="i"
          >
            {{ item.name }}
          </view>
        </scroll-view>
      </view>
      <view class="right">
        <scroll-view class="right-scroll" style="height: 100vh" scroll-y="true">
          <view
            class="item right-scroll-item"
            v-for="(item, i) in list[currentIndex].list"
            :key="i"
          >
            <image :src="item.src" />
            <text class="d-block">{{ item.name }}</text>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import searchHeader from '../../components/search/search-header.vue'
export default {
  components: {
    searchHeader
  },
  data() {
    return {
      value: '小妹',
      cate: [],
      list: [],
      currentIndex: 0,
      scrollLeftTop: [],
      scrollRightTop: []
    }
  },
  onLoad(options) {
    for (let i = 0; i <= 20; i++) {
      this.cate.push({
        name: `分类${i}`
      })
      this.list.push({
        list: []
      })
    }
    for (let i = 0; i < this.list.length; i++) {
      for (let j = 0; j <= 24; j++) {
        this.list[i].list.push({
          src: '/static/images/demo/cate_03.png',
          name: `商品${i}商品${j}`
        })
      }
    }
  },
  onReady() {
    const query = uni.createSelectorQuery().in(this)
    let left = []
    let right = []
    query
      .selectAll('.left-scroll-item')
      .boundingClientRect(data => {
        left = data.map(item => item.top)
        console.log('left', left)
      })
      .exec()
    query
      .selectAll('.right-scroll-item')
      .boundingClientRect(data => {
        right = data.map(item => item.top)
        console.log('right', right)
      })
      .exec()
  },
  methods: {
    search() {
      console.log(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.classification {
  display: flex;

  /* 隐藏滚动条 */
  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
    height: 0 !important;
    -webkit-appearance: none;
    background: transparent;
  }

  .left {
    width: 70px;
    background-color: #fff;
    display: flex;
    align-items: center;
    .item {
      padding: 8px 0;
      text-align: center;
      &:not(:last-child) {
        border-bottom: 1px solid #ddd;
      }
    }
    .current {
      border-left: 3px solid #ff852a;
      color: #ff852a;
      background-color: #f8f8f8;
    }
  }

  .right {
    flex: 1;
    display: flex;

    .item {
      width: 33%;
      text-align: center;
      display: inline-block;
      image {
        width: 70px;
        height: 80px;
        padding: 4px 0;
      }
    }
  }
}
</style>
