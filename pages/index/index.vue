<template>
  <view class="content">
    <!-- 轮播图 -->
    <u-sticky bgColor="#fff">
      <u-tabs
        :list="tabList"
        @click="tabClick"
        :activeStyle="{ color: '#fd6801' }"
        lineColor="#fd6801"
        :current="current"
      ></u-tabs>
    </u-sticky>
    <swiper
      :duration="500"
      :current="current"
      :data-index="current"
      @change="toggle"
      circular
      style="height: 100vh"
    >
      <swiper-item
        v-for="(item, idx) in tabList"
        :key="idx"
        style="overflow-y: scroll"
      >
        <u-swiper height="180" :list="list1"></u-swiper>
        <!-- 首页分类 -->
        <category :categoryList="categoryList"></category>
        <!-- 三图广告 -->
        <three-adv :images="images"></three-adv>

        <card
          headTitle="每日精选"
          bodyCover="/static/images/demo/demo4.jpg"
        ></card>

        <div class="goods">
          <goods-item
            v-for="(good, index) in commonList"
            :key="index"
            :good="good"
          ></goods-item>
        </div>
      </swiper-item>
    </swiper>

    <!-- <view class="footer">
      <view class="left">
        <view class="item">
          <u-icon name="heart-fill" size="28"></u-icon>
          <text>收藏</text>
        </view>
        <view class="item">
          <u-icon name="shopping-cart" size="28"></u-icon>
          <text>加购</text>
        </view>
      </view>
      <view class="right">
        <u-button color="#FD6801" text="加入购物车"></u-button>
      </view>
    </view> -->
  </view>
</template>

<script>
import goodsItem from './components/goods-item.vue'
import category from './components/category.vue'
export default {
  components: {
    goodsItem,
    category
  },
  data() {
    return {
      current: 0,
      tabList: [
        {
          name: '关注'
        },
        {
          name: '推荐'
        },
        {
          name: '电影'
        },
        {
          name: '科技'
        },
        {
          name: '音乐'
        }
      ],
      categoryList: [
        {
          src: '/static/images/indexnav/1.png',
          title: '新品分类'
        },
        {
          src: '/static/images/indexnav/2.gif',
          title: '小米众筹'
        },
        {
          src: '/static/images/indexnav/3.gif',
          title: '以旧换新'
        },
        {
          src: '/static/images/indexnav/4.gif',
          title: '1分拼团'
        },
        {
          src: '/static/images/indexnav/5.gif',
          title: '超值特卖'
        },
        {
          src: '/static/images/indexnav/6.gif',
          title: '小米秒杀'
        },
        {
          src: '/static/images/indexnav/7.gif',
          title: '真心想要'
        },
        {
          src: '/static/images/indexnav/8.gif',
          title: '电视热卖'
        },
        {
          src: '/static/images/indexnav/9.gif',
          title: '家电热卖'
        },
        {
          src: '/static/images/indexnav/10.gif',
          title: '米粉卡'
        }
      ],
      list1: [
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper3.png'
      ],
      images: [
        '/static/images/demo/demo1.jpg',
        '/static/images/demo/demo2.jpg',
        '/static/images/demo/demo2.jpg'
      ],
      commonList: [
        {
          cover: '/static/images/demo/list/1.jpg',
          title: '米家空调',
          desc: '1.5匹变频',
          oprice: 2699,
          pprice: 1399
        },
        {
          cover: '/static/images/demo/list/2.jpg',
          title: '米家空调',
          desc: '1.5匹变频',
          oprice: 2699,
          pprice: 1399
        },
        {
          cover: '/static/images/demo/list/3.jpg',
          title: '米家空调',
          desc: '1.5匹变频',
          oprice: 2699,
          pprice: 1399
        },
        {
          cover: '/static/images/demo/list/4.jpg',
          title: '米家空调',
          desc: '1.5匹变频',
          oprice: 2699,
          pprice: 1399
        },
        {
          cover: '/static/images/demo/list/5.jpg',
          title: '米家空调',
          desc: '1.5匹变频',
          oprice: 2699,
          pprice: 1399
        },
        {
          cover: '/static/images/demo/list/6.jpg',
          title: '米家空调',
          desc: '1.5匹变频',
          oprice: 2699,
          pprice: 1399
        }
      ]
    }
  },
  onLoad() {},
  methods: {
    tabClick(e) {
      this.current = e.index
      console.log('e', e)
    },
    change(index) {
      this.current = index
    },
    // 切换触发的事件
    toggle(e) {
      this.current = e.detail.current
    }
  }
}
</script>

<style lang="scss">
.content {
  .u-grid-item {
    padding-top: 18px;
    .grid-text {
      padding-top: 4px;
    }
  }
  .banner {
    margin-top: 18px;
  }
  .footer {
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 52px;
    display: flex;
    overflow: hidden;
    margin-top: 52px;
    .left {
      width: 45%;
      display: flex;
      .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .right,
    .u-button {
      flex: 1;
      height: 100%;
    }
  }
}
</style>
