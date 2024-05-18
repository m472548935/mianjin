<template>
  <div class="layout-page">
    <div>
      <router-view></router-view>
    </div>

    <div>
      <van-tabbar v-model="active" route>
        <van-tabbar-item to="articles"  icon="notes-o"  >面经</van-tabbar-item>
        <van-tabbar-item to="collect" icon="star-o">收藏</van-tabbar-item>
        <van-tabbar-item to="like" icon="like">喜欢</van-tabbar-item>
        <van-tabbar-item to="user" icon="user">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped></style>
