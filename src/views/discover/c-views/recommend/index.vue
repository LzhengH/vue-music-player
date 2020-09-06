<template>
  <div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
  </div>
</template>

<script>
import { getTopBanner } from 'src/api/recommend'

export default {
  mounted() {
    console.log('mount')
    getTopBanner() // 获取轮播图
      .then(res => {
        console.log(res.data)
      })
  }
}
</script>

<style lang="less" scoped>

</style>
