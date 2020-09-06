<template>
  <footer class="wrapper">
    <div class="wrap-v2 content">
      <div class="left">
        <ul class="link">
          <li
            class="item"
            v-for="(item, index) in footerLinks"
            :key="index">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">{{item.title}}</a>
            <span class="line">|</span>
          </li>
        </ul>
        <div class="copyright">
          <span>网易公司版权所有©1997-{{new Date().getFullYear()}}</span>
            <span>
              杭州乐读科技有限公司运营：
              <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
            </span>
        </div>
        <div class="report">
          <span>违法和不良信息举报电话：0571-89853516</span>
            <span>
              举报邮箱：
              <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
            </span>
        </div>
        <div class="info">
          <span>粤B2-20090191-18</span>
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
              工业和信息化部备案管理系统网站
            </a>
        </div>
      </div>
      <ul class="right">
        <li
          class="item"
          v-for="(item, index) in footerImages"
          :key="index">
          <a class="link" :href="item.link" rel="noopener noreferrer" target="_blank"></a>
          <span class="title">{{item.title}}</span>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { footerLinks, footerImages } from 'src/utils/constant'
export default {
  data() {
    return {
      footerLinks: Object.freeze(footerLinks),
      footerImages: Object.freeze(footerImages)
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    height: 172px;
    background-color: @background-color;
    color: #666;
    border-top: 1px solid #d3d3d3;
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        padding-top: 15px;
        line-height: 24px;
        .link {
          .item {
            display: inline-block;
            a {
              color: #999;
            }
            .line {
              margin: 0 10px;
              color: #999;
            }
          }
        }
        .copyright {
          span {
            margin-right: 15px;
          }
        }
        .report {}
        .info {}
      }
      .right {
        display: flex;
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 40px;
          .link {
            display: block;
            width: 50px;
            height: 45px;
            background-image: url(~src/assets/img/sprite_footer_02.png);
            background-size: 110px 450px;
          }
          &:nth-child(1) .link {
            background-position: -60px -101px;
          }
          &:nth-child(2) .link {
            background-position: 0 0;
          }
          &:nth-child(3) .link {
            background-position: -60px -50px;
          }
          &:nth-child(4) .link {
            background-position: 0 -101px;
          }

          .title {
            margin-top: 5px;
            display: block;
            width: 52px;
            height: 10px;
            background-image: url(~src/assets/img/sprite_footer_01.png);
            background-size: 180px 100px;
          }

          &:nth-child(1) .title {
            background-position: -1px -90px;
          }
          &:nth-child(2) .title {
            background-position: 0 0;
            margin-top: 7px;
          }
          &:nth-child(3) .title {
            background-position: 0 -54px;
            margin-top: 6px;
          }
          &:nth-child(4) .title {
            background-position: -1px -72px;
            margin-top: 6px;
          }
        }
      }
    }
  }
</style>
