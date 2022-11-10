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
      <view class="item">
        <image src="/static/images/demo/list/1.jpg" />
        <view class="info">
          <h3 class="title">真无线蓝牙耳机</h3>
          <p class="desc">雅致简约 / 雅致简约 / 雅致简约 / 雅致简约</p>
          <p class="price">￥ 900</p>
          <p class="num">1948条评论 98%满意</p>
        </view>
      </view>
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
      },
      show: false,
      tagList: ['标签', '标签', '标签']
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
        color: #6c757d;
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
}
::v-deep .u-transition {
  padding: 12px;
  display: inline-block;
  .u-tag {
    padding: 4px 20px;
  }
}
</style>
