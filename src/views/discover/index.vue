<template>
  <main class="wrapper">
    <nav class="top">
      <ul class="top-menu wrap-v1">
        <li
          class="item"
          v-for="(item, index) in discoverMenu"
          :key="index">
            <router-link :to="item.link">
              {{item.title}}
              <span
                class="iconfont"
                v-if="item.rIcon === true">
                &#xe650;
              </span>
            </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </main>
</template>

<script>
import { discoverMenu } from 'src/utils/constant'
export default {
  data() {
    return {
      discoverMenu: Object.freeze(discoverMenu)
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    .top {
      height: 30px;
      background-color: @theme-color;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      // box-shadow: 0 1px 1px @theme-color-shadow;
      .top-menu {
        display: flex;
        padding-left: 180px;
        position: relative;
        top: -5px;
        left: 8px;
        .item {
          a {
            display: inline-block;
            position: relative;
            height: 20px;
            line-height: 20px;
            padding: 0 13px;
            margin: 7px 17px 0;
            color: #fff;
            &:hover, &.link-active {
              text-decoration: none;
              background-color: #9B0909;
              border-radius: 20px;
            }
            .iconfont {
              position: absolute;
              font-size: 8px;
              top: -4px;
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
</style>
