<template>
    <div class="login">
      <div class="header">
        <span class="title">手机快捷登录</span>
        <span class="sign">密码登录</span>
      </div>
      <div class="input">
        <div class="phone">
        <input value="请输入手机号码"/>
          <button class="button">获取验证码</button>
        </div>
        <input class="number" value="请输入验证码"/>
        <p class="little">未注册的手机号登录时将自动注册，且代表您已同意用户协议</p>
        <p class="use">-使用合作账号登录-</p>
        <ul class="icon">
          <li><img :src="qq" width="60" height="60"/></li>
          <li><img :src="weixin" width="60" height="60"/></li>
          <li><img :src="weibo" width="60" height="60"/></li>
        </ul>
        <div class="bottom">
          <span>登录</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                qq:'../static/img/qq.png',
              weixin:'../static/img/weixin.png',
              weibo:'../static/img/weibo.png',
            }
        }
    }
</script>
<style  lang="less" scoped>
  .login {
    position: absolute;
    margin-top: 0;
    margin-bottom: 120px;
    z-index: -120;
    display: flex;
    width: 100%;
    height: 1380px;
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
      .input {
        background: #ffffff;
        width:100%;
        height: 190px;
        margin-top: 300px;
        margin-left: -100%;
       .phone {
         width:100%;
         height: 90px;
         text-align: center;
         input {
           width:60%;
           height: 100%;
           border: none;
           font-size: 30px;
           color: #878787;
           text-align: left;
           border-bottom: 1px solid #a9a9a9;
         }
         .button {
           width:24%;
           height: 90px;
           text-align: center;
           color: #eeeeee;
           font-size: 28px;
           border-radius: 12px;
           background-color: #bbbbbb;

         }
       }
        .number {
          width:80%;
          height: 90px;
          margin-top: 8px;
          margin-left: 70px;
          border: none;
          font-size: 30px;
          color: #878787;
          text-align: left;
          border-bottom: 1px solid #a9a9a9;
        }
        .little {
          padding-left: 80px;
          font-size: 24px;
          color: #878787;
        }
        .use {
          margin-top: 500px;
          padding-left: 400px;
          font-size: 24px;
          color: #878787;
        }
        .icon {
          margin-top: 80px;
           width: 100%;
          height: 80px;
          li {
            float: left;
            padding-left: 200px;
            list-style: none;
          }
        }
        .bottom {
          background: #f04848;
          height: 100px;
          font-size: 35px;
          font-weight: 700;
          color: #ffffff;
          line-height: 100px;
          text-align: center;
        }
      }
    }

</style>
