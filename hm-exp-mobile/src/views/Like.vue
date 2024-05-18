<template>
  <div class="like-page">
<van-nav-bar
  title="喜欢"
/>
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
import { getArticlesLike } from '@/api/article'
export default {
  name: 'LikePage',
  data () {
    return {
      page: 1,
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    async onLoad () {
      const res = await getArticlesLike({ page: this.page })
      console.log(res)
      this.list.push(...res.data.rows)
      this.loading = false
      this.page++
      if (this.page > res.data.pageTotal) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
