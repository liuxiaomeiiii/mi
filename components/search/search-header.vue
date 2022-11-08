<template>
  <view class="search">
    <u-icon name="arrow-left" size="24"></u-icon>
    <u-input
      v-model="modelValue"
      @input="changeVal"
      placeholder="请输入搜索内容"
    >
      <u-icon name="search" size="22"></u-icon>
    </u-input>
    <text class="btn" @click="search">搜索</text>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    value: String
  },
  data() {
    return {
      modelValue: this.value
    }
  },
  methods: {
    changeVal() {
      this.$emit('input', this.modelValue)
    },
    search() {
      this.$emit('search')
    }
  }
}
</script>

<style lang="scss" scoped>
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
