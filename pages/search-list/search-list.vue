<template>
  <view>
    <search-header v-model="value" @search="search"></search-header>

    <view class="sort-list">
      <view
        v-for="(item, index) in screen.list"
        :key="index"
        @tap="tabScreen(index, item)"
        @click="tabClick(item.name)"
        class="sort-item"
      >
        <text
          :class="
            screen.currentIndex === index ? 'main-text-color' : 'text-muted'
          "
        >
          {{ item.name }}
        </text>
        <view v-if="item.name !== '筛选'" class="btn-wrap">
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
    <view class="goods-list">
      <goods-list
        v-for="(item, index) in goodsList"
        :item="item"
        :key="index"
      ></goods-list>
    </view>
    <u-popup @close="show = false" mode="right" :show="show">
      <view class="btn-wrap">
        <card headTitle="服务">
          <radio-group :tagList="tagList"></radio-group>
        </card>
        <button>重置</button>
        <button>确定</button>
      </view>
    </u-popup>
  </view>
</template>

<script>
import goodsList from '../../components/search/goods-list.vue'
import searchHeader from '../../components/search/search-header.vue'
export default {
  components: {
    goodsList,
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
      },
      show: false,
      tagList: ['标签', '标签', '标签'],
      goodsList: [
        {
          title: '真无线蓝牙耳机',
          titlepic: '/static/images/demo/list/1.jpg',
          desc: '雅致简约 / 雅致简约 / 雅致简约 / 雅致简约',
          pprice: 900,
          comment_num: 1300,
          good_num: '98%'
        },
        {
          title: '真无线蓝牙耳机',
          titlepic: '/static/images/demo/list/1.jpg',
          desc: '雅致简约 / 雅致简约 / 雅致简约 / 雅致简约',
          pprice: 900,
          comment_num: 1300,
          good_num: '98%'
        }
      ]
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
    },
    tabClick(name) {
      if (name === '筛选') this.show = true
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

.btn-wrap {
  button {
    display: inline-block;
    background: #fff;
    border: none;
    &:last-child {
      background: #fd6801;
      color: #fff;
    }
    width: 120px;
  }
}
.goods-list {
  padding: 0 8px;
}
::v-deep .u-transition {
  padding: 12px;
  display: inline-block;
  .u-tag {
    padding: 4px 20px;
  }
}
</style>
