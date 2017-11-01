<template>
    <div class="mine">
      <div class="header">
        <router-link to="/Login"><span class="title">登录></span></router-link>
        <span class="sign">立即签到</span>
      </div>
      <ul class="nav">
        <li><img :src="card" height="55" width="55"><p>淘金V计划</p></li>
        <li><img :src="cards" height="55" width="55"><p>优惠券</p></li>
        <li><img :src="lucky" height="55" width="55"><p>幸运星抽奖</p></li>
        <li><img :src="change" height="55" width="55"><p>礼品兑换</p></li>
        <li><img :src="gift" height="55" width="55"><p>我的礼包</p></li>
      </ul>
      <ul class="list">
        <li><img :src="message" height="55" width="55"><span>我的消息</span></li>
        <li><img :src="love" height="55" width="55"><span>我的收藏</span></li>
        <li><img :src="publish" height="55" width="55"><span>我的发布</span><span class="little">爆料·发布·闲置等</span></li>
        <li><img :src="consider" height="55" width="55"><span>关注管理</span></li>
        <li><img :src="announce" height="55" width="55"><span>预告提醒</span></li>
      </ul>
      <ul class="change">
        <li><img :src="experiment" height="55" width="55"><span>我的众测</span></li>
        <li><img :src="integral" height="55" width="55"><span>兑换记录</span><span class="little">优惠券·礼品</span></li>
      </ul>
      <ul class="gift">
        <li><img :src="gift" height="55" width="55"><span>邀请有礼</span><span class="little">邀请好友得金币</span></li>
        <li><img :src="feedback" height="55" width="55"><span>意见反馈</span></li>
        <li><img :src="set" height="55" width="55"><span>设置</span></li>
      </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                card:'../static/img/card.png',
                cards:'../static/img/card (1).png',
                lucky:'../static/img/icon-lucky-line.png',
              change:"../static/img/chage.png",
              gift:'../static/img/gift.png',
              message:'../static/img/message.png',
              love:'../static/img/love.png',
              publish:'../static/img/publish.png',
              consider:'../static/img/et-consider.png',
              announce:'../static/img/announce.png',
              experiment:'../static/img/experiment.png',
              integral:'../static/img/integral.png',
              feedback:'../static/img/feedback.png',
              set:'../static/img/set.png',
            }
        }
    }
</script>
<style lang="less" scoped>
  .mine {
    position: absolute;
    margin-top: 0;
    margin-bottom: 120px;
    z-index: -120;
    display: flex;
    width: 100%;
    background: #eeeeee;
    .header {
      width:100%;
      height: 200px;
      background: #f04848;
      color: white;
      .title {
        display: block;
        font-size: 36px;
        margin-top: 80px;
        padding-left: 40px;
        color: white;
      }
      .sign {
        display: block;
        font-size: 22px;
        margin-top: -5px;
        padding-left: 800px;
      }
    }
    .nav {
      background: #ffffff;
      border-bottom: 1px solid #d6d6d6;
      border-top: 1px solid #d6d6d6;
      width:100%;
      height: 190px;
      margin-top: 220px;
      margin-left: -100%;
      /*box-shadow: 0 9px 16px 0 rgba(0,0,0,0.2);*/
      li {
        font-size: 23px;
        float: left;
        width:20%;
        list-style: none;
        img {
          margin-top: 50px;
          margin-left: 50px;
        }
        p {
          padding-left: 30px;
        }

        &.light {
          background: rgba(20, 105, 182, 0.35);
        }
      }
    }
    .list {
      background: #ffffff;
      border-bottom: 1px solid #d6d6d6;
      border-top: 1px solid #d6d6d6;
      width:100%;
      height: 600px;
      margin-top: 436px;
      margin-left: -100%;
      li {
        list-style: none;
        border-bottom: 1px solid #d6d6d6;
        img {
          margin-top: 50px;
          margin-left: 50px;
        }
        span {
          padding-left: 50px;
          font-size: 28px;
        }
        span.little {
          font-size: 20px;
          color: #979797;
          padding-left: 500px;
        }
      }
    }
    .change {
      background: #ffffff;
      border-bottom: 1px solid #d6d6d6;
      border-top: 1px solid #d6d6d6;
      width:100%;
      height:260px;
      margin-top: 1060px;
      margin-left: -100%;
      li {
        list-style: none;
        border-bottom: 1px solid #d6d6d6;
        img {
          margin-top: 50px;
          margin-left: 50px;
        }
        span {
          padding-left: 50px;
          font-size: 28px;
        }
        span.little {
          font-size: 20px;
          color: #979797;
          padding-left: 500px;
        }
      }
    }
    .gift {
      background: #ffffff;
      border-bottom: 1px solid #d6d6d6;
      border-top: 1px solid #d6d6d6;
      width:100%;
      height: 380px;
      margin-top: 1350px;
      margin-left: -100%;
      li {
        list-style: none;
        border-bottom: 1px solid #d6d6d6;
        img {
          margin-top: 50px;
          margin-left: 50px;
        }
        span {
          padding-left: 50px;
          font-size: 28px;
        }
        span.little {
          font-size: 22px;
          color: #919191;
          padding-left: 500px;
        }
      }
    }

  }
</style>
