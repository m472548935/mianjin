<template>
  <div class="app">
<keep-alive :include="['LayoutPage']">
     <router-view></router-view>
</keep-alive>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.box{
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
