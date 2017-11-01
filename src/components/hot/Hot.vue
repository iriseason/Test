<template>
    <div class="hot">
      <div class="header">
        <router-link to="/GoodEssay"><span class="title">< 原创详情</span></router-link>
        <span class="good"></span>
      </div>

      <div class="detail">
        <ul>
          <li v-for="item in goodEssay.topic_list">
            <p class="topTitle">{{item.article_title}}</p>
            <div class="pic">
              <img :src="item.article_pic">
            </div>
            <p class="mall"><img :src="item.article_avatar" width="40" height="40"> <span>{{item.article_name}}</span></p>
            <p class="essay">{{item.article_filter_content}}</p>
            <div class="icon">
              <span><img :src="laud" height="40" width="40"/>{{item.laud}} </span>
              <span><img :src="attention" height="40" width="40"/>{{item.article_collection}}</span>
              <span><img :src="share" height="40" width="40"/>分享 </span>
              <span><img :src="comment" height="40" width="40"/>{{item.article_comment}} </span>
            </div>
          </li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        props: {
          goodEssay: {
            type: Object
          }
        },
        data: function () {
            return {
                laud:'../static/img/laud.png',
               attention:'../static/img/attention.png',
              share:'../static/img/share.png',
              comment:'../static/img/comment.png'
            }
        }
    }
</script>
<style lang="less" scoped>
  .hot {
  position: absolute;
  margin-top:0;
    margin-bottom: 120px;
  z-index: -120;
  display: flex;
  width: 100%;
    .header {
      width:100%;
      height: 90px;
      border-bottom: 1px solid #8f8f8f;
      line-height: 90px;
      .title {
        font-size: 35px;
        color: #000;
        padding-left: 40px;
      }
    }
    .detail {
      width:100%;
      margin-left: -100%;
      margin-top: 90px;
      li {
        list-style: none;
        border-top:1px solid #8f8f8f;
        .topTitle {
          width:100%;
          height: 60px;
          line-height: 60px;
          text-align: center;
          font-size: 36px;
        }
        .pic {
          width:90%;
          height: 448px;
          margin: 40px auto;
          img {
            height:100%;
            width:100%;
          }
        }
        .mall {
          margin-left: 50px;
          width:180px;
          height: 180px;
          border-radius: 50%;
          span {
            font-size: 20px;
            padding-left: 10px;
          }
        }
        .essay {
          margin-top: -108px;
          font-size: 26px;
          color:grey;
          letter-spacing: 13px;
        }
        .icon {
          height: 100px;
          span {
           padding-left: 120px;
            font-size: 23px;
            color: #757575;
          }
        }

      }
    }
  }
</style>
