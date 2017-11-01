<template>
    <div class="goodPrice">
      <div class="header">
        <div class="title">好价</div>
        <div class="dropdown">
          <button class="dropbtn">V</button>
          <div class="dropdown-content">
            <ul>
              <li><img :src="iconfont" width="32" height="32"><a href="#">加关注</a> </li>
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
            <li v-for="(list,index) in goodPrice.rows" :key="index" v-show="index === currentIndex" @mouseenter="stop"
                @mouseleave="go">
              <img class="bigPic" :src="list.img"/>
            </li>
          </ul>
        </transition>
        <div class="carousel-items">
      <span v-for="(items,index) in goodPrice.rows.length" :class="{'active':index === currentIndex}"
            @mouseover="change(index)"></span>
        </div>
      </div>
      <div class="nav">
        <ul>
          <li v-for="(item,index) in goodPrice.circular_banner">
            <img :src="item.img" width="80" height="80"/>
            <p>{{item.title}}</p>
          </li>
        </ul>
      </div>
      <div class="table">
        <ul>
          <li v-for="(items,index) in goodPrice.little_banner" @click="click(index)" :class="{'light':i === index}" >
            <img :src="items.img" />
            <p>{{items.title}}</p>
          </li>
        </ul>
      </div>
      <div class="goods">
        <ul>
          <li v-for="goods in goodPrice.goods">
          <div class="name"><span style="color: red" class="icon-power"></span>{{goods.article_channel_name}}</div>
          <div class="left">
            <img :src="goods.article_pic"/>
        </div>
            <div class="right">
              <p class="title">{{goods.article_title}}</p>
              <p class="article_price">{{goods.article_price}}</p>
              <div class="article_mall">
                <span class="mall">{{goods.article_mall}}|{{goods.article_format_date}}</span>
                <span class="icon-bubble2">{{goods.article_comment}}</span>
                <span class="icon-shield">{{goods.article_worthy}}</span>
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
          goodPrice: {
              type:Object
          }
        },
        data: function () {
            return {
              iconfont:'../static/img/iconfont-zhaomingdianzi.png',
              remind:'../static/img/remind.png',
              survey:'../static/img/survey.png',
              scanning:'../static/img/scanning.png',
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
        go() {
          this.timer = setInterval(() => {
            this.autoPlay()
          }, 4000)
        },
        stop() {
          clearInterval(this.timer)
          this.timer = null
        },
        change(index) {
          this.currentIndex = index
        },
        autoPlay() {
          this.currentIndex++
          if (this.currentIndex > this.goodPrice.rows.length - 1) {
            this.currentIndex = 0
          }
        },
//        scrollTest() {
//          if (!this.testScroll){
//            this.testScroll = new IScroll(this.$refs.sliderWrapper,{
//              click: true,
//              scrollX: true,
//              scrollY: false
//            })
//          }else {
//            this.testScroll.refresh()
//          }
//        }
      }
    }
</script>
<style lang="less" scoped>
   .goodPrice {
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
       width:100%;
       height: 400px;
       margin-top: 90px;
       margin-left: -103%;
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
       height: 400px;
       margin-top: 500px;
       margin-left: -97%;
       box-shadow: 0 9px 16px 0 rgba(0,0,0,0.2);
       li {
         font-size: 20px;
         float: left;
         width:20%;
         list-style: none;
         p {
           padding-left: 6px;
         }
         &.light {
           background: rgba(20, 105, 182, 0.35);
         }
       }
     }
     .table {
       width:98%;
       height: 500px;
       margin-top: 1000px;
       margin-left: -99%;
       box-shadow: 0 9px 16px 0 rgba(0,0,0,0.2);
       li {
         border-bottom: 1px solid #979797;
         border-right:1px solid #979797;
         border-left:1px solid #979797;
         float: left;
         width: 48%;
         list-style: none;
         &.light {
           background: rgba(20, 105, 182, 0.35);
         }
         img {
           width: 100%;
           height:162px;
         }
         p {
           font-size: 23px;
           text-align: center;
           color: rgba(51, 51, 51, 0.75);
         }
       }
     }
     .goods {
       width:98%;
       height: 100%;
       margin-top: 1500px;
       margin-left: -98%;
       /*background: #e3e3e3;*/
       li {
         list-style: none;
         border:1px solid #bababa;
         box-shadow: 0 9px 14px 0 rgba(0,0,0,0.17);
         margin-top: 20px;
         margin-left: -35px;
         height: 380px;
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
         .title {
           font-size: 29px;
         }
         .article_price {
           padding-top: 16px;
           font-size: 24px;
           color: #ee323f;
         }
         .article_mall {
           font-size: 22px;
           color: #595959;
           margin-top: 20px;
           .icon-bubble2 {
             padding-left: 140px;
           }
           .icon-shield {
             padding-left: 60px;
           }
         }
       }
     }
   }
</style>
