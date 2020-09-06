<template>
  <header class="wrapper">
    <div class="wrap-v1 content">
      <div class="left">
        <h1 class="logo-container">
          <a class="logo sprite_01" href="#/">网易云音乐</a>
        </h1>
        <ul class="select-list">
          <li
            class="select-item"
            v-for="(item, index) in headerLinks"
            :key="index">
            <router-link
              v-if="(item.link)[0] === '/'"
              :to="item.link">
              {{item.title}}
              <i class="sprite_01 icon"></i>
            </router-link>
            <a
              v-else
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer">
              {{item.title}}
            </a>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="search">
          <i class="el-icon-search"></i>
          <input type="text" placeholder="音乐/视频/电台/用户"/>
        </div>
        <div class="center">创作者中心</div>
        <div class="login">登录</div>
      </div>
    </div>
    <div class="divider"></div>
  </header>
</template>

<script>
import { headerLinks } from 'src/utils/constant.js'
export default {
  data() {
    return {
      headerLinks
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    height: 75px;
    background-color: #242424;
    font-size: @font-size-m;
    .content {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        .logo-container {
          padding-right: 6px;
          .logo {
            display: block;
            width: 176px;
            height: 70px;
            background-position: 0 0;
            text-indent: -9999px;
          }
        }
        .select-list {
          display: flex;
          line-height: 70px;
          .select-item {
            position: relative;
            a {
              display: block;
              padding: 0 20px;
              color: #ccc;
            }
            &:hover a, .link-active {
              color: #fff;
              background: #000;
              text-decoration: none;
            }
            .link-active .icon {
              position: absolute;
              display: inline-block;
              width: 12px;
              height: 7px;
              bottom: -1px;
              left: 50%;
              transform: translate(-50%, 0);
              background-position: -226px 0;
            }
            &:last-child a {
              position: relative;
              &::after {
                position: absolute;
                content: "";
                width: 28px;
                height: 15px;
                background-image: url(~src/assets/img/sprite_01.png);
                background-position: -190px 0;
                top: 20px;
                right: -15px;
              }
            }
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        color: #ccc;
        font-size: @font-size-s;
        margin-right: 20px;
        .search {
          #center();
          width: 158px;
          height: 32px;
          border-radius: 16px;
          background-color: #fff;
          padding: 0 10px 0 5px;
          box-sizing: border-box;
          .el-icon-search {
            font-size: @font-size-m;
            color: #444;
            padding: 0 5px;
          }
          input {
            width: 100%;
            background-color: #fff;
            &::placeholder {
              font-size: @font-size-s;
              color: #9b9b9b;
            }
        }
        }
        .center {
          width: 90px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          border: 1px solid #4f4f4f;
          border-radius: 16px;
          margin: 0 16px;
          cursor: pointer;
          &:hover {
            color: #fff;
            border: 1px solid #ccc;
          }
        }
        .login {
          color: #787878;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .divider {
      height: 5px;
      background-color: @theme-color;
    }
  }
</style>
