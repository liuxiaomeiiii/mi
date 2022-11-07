<template>
  <u-grid :border="false" col="5">
    <u-grid-item
      class="grid-item"
      v-for="(item, index) in categoryList"
      :key="index"
    >
      <image :src="item.src" style="width: 26px; height: 26px"></image>
      <text class="grid-text">{{ item.title }}</text>
    </u-grid-item>
  </u-grid>
</template>

<script>
export default {
  props: {
    categoryList: {
      default: Array,
      require: true
    }
  },
  data() {
    return {}
  },
  onLoad() {},
  methods: {}
}
</script>

<style lang="scss"></style>
