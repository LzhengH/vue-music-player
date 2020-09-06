<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from 'src/components/MyHeader'
import MyFooter from 'src/components/MyFooter'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="less" scoped>

</style>
