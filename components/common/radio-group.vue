<template>
  <view>
    <u-tag
      v-for="(item, index) in tagList"
      :key="index"
      :text="item"
      @click="tagClick(index)"
      :bgColor="index === currentIndex ? activeColor : defaultColor"
      :borderColor="index === currentIndex ? activeColor : defaultColor"
    ></u-tag>
  </view>
</template>

<script>
export default {
  props: {
    defaultColor: {
      type: String,
      default: '#ccc'
    },
    activeColor: {
      type: String,
      default: '#EB7320'
    },
    tagList: Array
  },
  data() {
    return {
      currentIndex: ''
    }
  },
  methods: {
    tagClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss" scoped></style>
