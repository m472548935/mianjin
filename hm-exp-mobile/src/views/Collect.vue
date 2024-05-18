<template>
  <div class="collect-page">
<van-nav-bar
  title="收藏"
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
import { getArticlesCollect } from '@/api/article'
export default {
  name: 'CollectPage',
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
      const res = await getArticlesCollect({ page: this.page })
      console.log(res.data)
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
