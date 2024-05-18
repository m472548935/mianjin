<template>
  <div class="article-page">
     <!-- 头部导航 -->
    <nav class="my-nav van-hairline--bottom">
      <a
        :class="{ active: sorter === 'weight_desc' }"
        @click="changeSorter('weight_desc')"
        href="javascript:;"
        >推荐</a
      >
      <!-- 对于axios，如果 传递的 属性值，为null或undefined，则此参数会被忽略 -->
      <a
        :class="{ active: sorter === null }"
        @click="changeSorter(null)"
        href="javascript:;"
        >最新</a
      >
      <div class="logo"><img src="@/assets/logo.png" alt=""></div>
    </nav>
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
 <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
</van-list>

  </div>
</template>

<script>
import { getArticle } from '@/api/article'
export default {
  name: 'ArticlePage',
  data () {
    return {
      current: 1,
      list: [],
      sorter: 'weight_desc',
      loading: false,
      finished: false
    }
  },
  // async created () {
  //   const res = await getArticle({ current: this.current, sorter: this.sorter })
  //   console.log(res.data.rows)
  //   this.list = res.data.rows
  // },
  methods: {
    changeSorter (value) {
      this.sorter = value
      this.current = 1
      this.list = []
      this.finished = false
      this.loading = true
      this.onLoad()
    },
    async onLoad () {
      const res = await getArticle({ current: this.current, sorter: this.sorter })
      console.log(res)
      this.list.push(...res.data.rows)
      this.loading = false
      this.current++
      // 对于没有更多数据的数据
      if (this.current > res.data.pageTotal) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
