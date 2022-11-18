<template>
  <view>
    <search-header v-model="value" @search="search"></search-header>
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
      value: '小妹'
    }
  },
  methods: {
    search() {
      console.log(this.value)
    }
  }
}
</script>

<style></style>
