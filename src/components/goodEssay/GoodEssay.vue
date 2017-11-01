<template>
    <div class="goodEssay">
      <div class="header">
        <div class="title">好文</div>
        <div class="dropdown">
          <button class="dropbtn">V</button>
          <div class="dropdown-content">
            <ul>
              <li><img :src="iconfont" width="32" height="32"><a href="#">加关注</a></li>
              <li><img :src="remind" width="32" height="32"><a href="#">发爆料</a> </li>
              <li><img :src="survey" width="32" height="32"><a href="#">发原创</a> </li>
              <li><img :src="scanning" width="32" height="32"><a href="#">扫一扫</a> </li>
            </ul>
          </div>
        </div>
        <ul class="icon">
          <li class="icon-search"></li>
          <li class="icon-filter"></li>
        </ul>
      </div>
      <div class="slider">
        <transition>
          <ul class="list">
            <li v-for="(list,index) in goodEssay.rows" :key="index" v-show="index === currentIndex">
              <img class="bigPic" :src="list.img"/>
            </li>
          </ul>
        </transition>
        <div class="carousel-items">
      <span v-for="(items,index) in goodEssay.rows.length" :class="{'active':index === currentIndex}"></span>
        </div>
      </div>
      <div class="nav">
        <ul>
          <li v-for="(item,index) in goodEssay.little_banner" @click="click(index)" :class="{'light':i === index}">
            <img :src="item.img" width="80" height="80"/>
            <p>{{item.title}}</p>
          </li>
        </ul>
      </div>
      <div class="hot">
        <div class="title">
          <img :src="hot" width="40" height="40"/>
          <span class="today">今日热门</span>
          <router-link to="/Hot"><span class="more">详情</span></router-link>
        </div>
        <ul>
          <li v-for="(topic,index) in goodEssay.topic_list">
            <div class="left">
              <img :src="topic.article_pic"/>
            </div>
            <div class="right">
              <p class="titleTwo">{{topic.article_title}}</p>
              <div class="article_mall">
                <span class="mall"><img :src="topic.article_avatar" width="60" height="60"> {{topic.article_name}}</span>
                <span class="icon-bubble2">{{topic.article_comment}}</span>
                <span class="icon-star-empty" :class='{"light":!topic.is_collect}' @click="collect(index,goodEssay.topic_list)">{{topic.article_collection}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="recommend">
        <div class="titleThree">
          <img :src="assessed" width="40" height="40"/>
          <span class="essay">好文推荐</span>
          <span class="more">更多</span>
        </div>
        <ul>
          <li v-for="(recommend,index) in goodEssay.recommend">
            <div class="picture">
              <img :src="recommend.article_pic"/>
            </div>
              <p class="titleFour">{{recommend.article_title}}</p>
              <div class="article_mall">
                <span class="article_avatar"><img :src="recommend.article_avatar"/></span>
               <span class="name">{{recommend.article_referrals}}</span>
                <br/>
                <span class="mall">{{recommend.tag_category}}</span>
                <div class="icon" >
                <span class="icon-bubble2">{{recommend.article_comment}}</span>
                <span class="icon-star-empty" :class='{"light":!recommend.collect}' @click="alsoCollect(index,goodEssay.recommend)">{{recommend.article_collection}}</span>
                </div>
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
              iconfont:'../static/img/iconfont-zhaomingdianzi.png',
              remind:'../static/img/remind.png',
              survey:'../static/img/survey.png',
              scanning:'../static/img/scanning.png',
              hot:'../static/img/hot.png',
              assessed:'../static/img/assessed-Badge .png',
              currentIndex: 0,
              i:0,
              timer:''
            }
        },
      created() {
        this.$nextTick(() => {
          this.timer = setInterval(() => {
            this.autoPlay()
          },2500)
        })
      },
      methods: {
        click(index) {
          this.i = index
        },
        autoPlay() {
          this.currentIndex++
          if (this.currentIndex > this.goodEssay.rows.length - 1) {
            this.currentIndex = 0
          }
        },
        collect(index,arr) {
            let i = index;
            arr[i].is_collect = !arr[i].is_collect
          if (arr[i].is_collect ){
            arr[i].article_collection--
          }else {
            arr[i].article_collection++
          }
        },
        alsoCollect(index,arr) {
          let i = index;
          arr[i].collect = !arr[i].collect
          if (arr[i].collect ){
            arr[i].article_collection--
          }else {
            arr[i].article_collection++
          }
        },
      }
    }
</script>
<style lang="less" scoped>
  .goodEssay {
    position: absolute;
    margin-top: 0;
    margin-bottom: 120px;
    z-index: -120;
    display: flex;
    width: 100%;
    .header {
      width:100%;
      height: 80px;
      line-height: 80px;
      border-bottom: 1px solid #9d9d9d;
      .title {
        font-size: 35px;
        margin-left: 30px;
      }
      .dropdown {
        position: relative;
        display: inline-block;
        margin-left: 810px;
        width: 40px;
        height: 40px;
        top:-72px ;
      }
      .dropbtn {
        margin-top:0;
        padding: 16px;
        font-size: 28px;
        font-weight: 800;
        color:#232323 ;
        border: none;
        cursor: pointer;
        background-color: white;
        width:100px;
      }
      .dropdown-content {
        z-index: 200;
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 170px;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2);
        li {
          list-style: none;
          padding-top: 10px;
        }
        a {
          margin-top: -92px;
          margin-left: 40px;
          color: #727272;
          text-decoration: none;
          display: block;
          font-size: 26px;
        }
        a:hover {
          background: #e3e3e3;
        }
      }
      .dropdown:hover .dropdown-content {
        display: block;
      }
      .icon {
        margin-left: 550px;
        margin-top: -135px;
        width:300px;
        height: 90px;
        font-size: 40px;
        color: #232323;
        li {
          float: left;
          list-style: none;
          margin-left: 60px;
        }
      }
    }
    .slider {
      width:98%;
      height: 400px;
      margin-top: 90px;
      margin-left: -102%;
      overflow: hidden;
      position: relative;
      li {
        position: absolute;
        width: 100%;
        height: 100%;
        .bigPic {
          width: 100%;
          height: 100%;
        }
      }
      .carousel-items {
        position: absolute;
        z-index: 10;
        top: 260px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        font-size: 0;
        span {
          display: inline-block;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          margin: 100px 3px;
          background-color: #084181;
          cursor: pointer;
        }
        .active {
          background: #f7dadf;
        }
        .list-enter-active {
          -webkit-transition: all 1s ease;
          transition: all 1s ease;
          transform: translateX(0)
        }
        .list-leave-active {
          transition: all 1s ease;
          transform: translateX(-100%)
        }
        .list-enter {
          transform: translateX(100%)
        }
        .list-leave {
          transform: translateX(0)
        }
      }
    }
    .nav {
      width:100%;
      margin-top: 500px;
      margin-left: -97%;
      box-shadow: 0 9px 16px 0 rgba(0,0,0,0.2);
      li {
        font-size: 20px;
        float: left;
        width:20%;
        list-style: none;
        p {
          padding-left: 12px;
        }
        &.light {
          background: rgba(20, 105, 182, 0.35);
        }
      }
    }
    .hot {
      width:100%;
      height: 500px;
      margin-top: 700px;
      margin-left: -100%;
      .title {
        width:100%;
        height: 80px;
        background-color: #eeeeee;
        line-height: 80px;
        display: inline-block;
        .today {
          padding-left: 20px;
          color: #000;
          font-size: 26px;
          font-weight: 700;
        }
        .more {
          color: #595959;
          font-size: 23px;
          padding-left: 730px;
          font-weight: 700;
        }
      }
      li {
        list-style: none;
        border:1px solid #bababa;
        box-shadow: 0 9px 14px 0 rgba(0,0,0,0.17);
        margin-top: 20px;
        height: 320px;
      }
      .name {
        height: 50px;
        line-height: 50px;
        font-size: 23px;
        font-weight: 500;
        border-bottom: 1px solid #bababa;
      }
      .left {
        width:30%;
        height: 240px;
        margin-top: 30px;
        margin-left: 30px;
        float: left;
        img {
          width:100%;
          height: 100%;
        }
      }
      .right {
        width:60%;
        margin-top: -235px;
        margin-left: 150px;
        margin-right: 10px;
        height: 260px;
        float: right;
        .titleTwo {
          font-size: 29px;
        }
        .article_mall {
          font-size: 30px;
          color: #7c7c7c;
          .mall {
            width:60px;
            height: 60px;
            border-radius: 50%;
          }
          .icon-bubble2 {
            padding-left: 140px;
          }
          .icon-shield {
            padding-left: 60px;
          }
          .icon-star-empty {
            &.light {
              color: #f10a05;
            }
          }
        }
      }
    }
   .recommend {
     width:100%;
     margin-top: 1860px;
     margin-left: -100%;
     .titleThree{
       width:100%;
       height: 80px;
       background-color: #eeeeee;
       line-height: 80px;
       display: inline-block;
       .essay {
         padding-left: 20px;
         color: #000;
         font-size: 26px;
         font-weight: 700;
       }
       .more {
         color: #868686;
         font-weight: 700;
         font-size: 21px;
         padding-left: 760px;
       }
     }
     li {
       list-style: none;
       border-top:1px solid #bababa;
       box-shadow: 0 9px 14px 0 rgba(0,0,0,0.17);
       margin-top: 20px;
       /*height: 550px;*/
     }
     .picture {
       width:90%;
       height: 400px;
       margin: 20px ;
       img {
         width: 100%;
         height:100%;
       }
     }
     .titleFour {
       padding-left: 50px;
       padding-right: 100px;
       font-size: 25px;
     }
     .article_mall {
       font-size: 30px;
       color: #8a8a8a;
       .article_avatar {
         padding-left: 50px;
         img {
           width: 50px;
           height: 50px;
         }
       }
       .mall {
         padding-left: 50px;
         padding-top: 20px;
       }
       .icon {
         margin-left: 700px;
         margin-top: -30px;
         width: 180px;
         height: 80px;
         .icon-bubble2, .icon-shield  {
           padding-left: 20px;
         }
         .icon-star-empty {
           &.light {
             color: #f10a05;
           }
         }
       }
     }
   }
  }
</style>
