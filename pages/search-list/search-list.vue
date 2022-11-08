<template>
  <view>
    <search-header v-model="value" @search="search"></search-header>

    <view class="sort-list">
      <view
        v-for="(item, index) in screen.list"
        :key="index"
        @tap="tabScreen(index, item)"
        class="sort-item"
      >
        <text
          :class="
            screen.currentIndex === index ? 'main-text-color' : 'text-muted'
          "
        >
          {{ item.name }}
        </text>
        <view v-if="item.name != '筛选'" class="btns">
          <view
            class="line-h0 iconfont icon-paixu-shengxu"
            :class="item.status === 1 ? 'main-text-color' : 'text-muted'"
          ></view>
          <view
            class="line-h0 iconfont icon-paixu-jiangxu"
            :class="item.status === -1 ? 'main-text-color' : 'text-muted'"
          ></view>
        </view>
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
      screen: {
        currentIndex: 0,
        list: [
          { name: '综合', status: 1 },
          { name: '销量', status: 0 },
          { name: '价格', status: 0 },
          { name: '筛选' }
        ]
      }
    }
  },
  methods: {
    search() {
      console.log(this.value)
    },
    tabScreen(index, item) {
      this.screen.currentIndex = index
      if (!item.hasOwnProperty('status')) return
      item.status === 1 ? (item.status = -1) : (item.status = 1)
      this.screen.list.forEach((item, idx) => {
        if (idx != index) {
          item.status = 0
        }
      })
      console.log(this.screen.list)
      console.log('item.status', item.status)
    }
  }
}
</script>

<style lang="scss" scoped>
.sort-list {
  display: flex;
  height: 40px;
  margin-top: 6px;
  border-top: 1px solid #dadbde;
  border-bottom: 1px solid #dadbde;
  .sort-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    text {
      font-size: 16px;
    }
    .btns {
      .iconfont {
        font-size: 22px;
      }
    }
  }
}
</style>
