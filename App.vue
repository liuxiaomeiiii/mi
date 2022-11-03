<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>
<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-ui/index.scss';
</style>
<style>
/*每个页面公共css */
@import './common/uni.css';
@import './common/animate.css';
@import './common/common.css';
@import './common/icon.css';
@import './common/zcm-main.css';
@import './common/zcm-main-nvue.css';
</style>
