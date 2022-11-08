<template>
  <view>
    <search-header v-model="value" @search="search"></search-header>
    <card
      headTitle="热门搜索"
      bodyCover="../../static/images/demo/search-banner.png"
    >
      <color-tag v-for="item in hot" :key="item.name">
        {{ item.name }}
      </color-tag>
    </card>
    <card headTitle="常用分类" :bodyPadding="true" :headBorderBottom="false">
      <color-tag v-for="item in cate" :color="false" :key="item.name">
        {{ item.name }}
      </color-tag>
    </card>

    <card headTitle="搜索记录" :headBorderBottom="false">
      <u-cell-group>
        <u-cell icon="setting-fill" title="只是近黄昏"></u-cell>
      </u-cell-group>
    </card>
  </view>
</template>

<script>
import colorTag from '../../components/search/color-tag.vue'
import searchHeader from '../../components/search/search-header.vue'
export default {
  components: {
    colorTag,
    searchHeader
  },
  data() {
    return {
      value: '小妹',
      hot: [
        { name: '领券中心' },
        { name: 'Redmi K20' },
        { name: 'RedmiBook 14' },
        { name: '智能积木 越野四驱车' },
        { name: '手环 腕带' }
      ],
      cate: [
        { name: '耳机' },
        { name: '手机' },
        { name: '音箱' },
        { name: '手表' },
        { name: '配件' },
        { name: '网关/传感器' },
        { name: '健康' },
        { name: '酷玩' }
      ]
    }
  },
  methods: {
    search() {
      console.log('000')
      uni.navigateTo({
        url: '/pages/search-list/search-list'
      })
    }
  }
}
</script>

<style lang="scss"></style>
