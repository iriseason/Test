<template>
  <div id="app">
    <div class="tab border">
      <div class="tab-item">
        <div style="color:#f04848;" class="icon-home"></div>
        <router-link to="/Home_page">首页</router-link>
      </div>
      <div class="tab-item">
        <div style="color:#f04848;" class="icon-power"></div>
        <router-link to="/GoodPrice">好价</router-link>
      </div>
      <div class="tab-item">
        <div style="color:#f04848;" class="icon-gift"></div>
        <router-link to="/Goods">好物</router-link>
      </div>
      <div class="tab-item">
        <div style="color:#f04848;" class="icon-tv"></div>
        <router-link to="/GoodEssay">好文</router-link>
      </div>
      <div class="tab-item">
        <div style="color:#f04848;" class="icon-smile"></div>
        <router-link to="/Mine">我的</router-link>
      </div>
    </div>
    <router-view :goodPrice="goodPrice" :goodEssay="goodEssay"/>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: 'app',
    data () {
      return {
        goodPrice: {},
        goodEssay: {}
      }
    },
    created() {
      let self = this
      this.$axios.get('/api/goodPrice')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.goodPrice = res.data
          }
          console.log(self.goodPrice)
        })

        this.$axios.get('/api/goodEssay')
          .then((res) => {
          res = res.data
            if (res.error === 0) {
              self.goodEssay = res.data
            }
            console.log(self.goodEssay)
          })

        .catch((error) => {
          alert(error)
        })
    }

  }
</script>

<style lang="less">
  #app {
    .tab {
      bottom:0;
      position: fixed;
      background: #ebebeb;
      display: flex;
      height: 120px;
      line-height: 118px;
      width: 100%;
      .tab-item {
        flex: 1;
        margin-top: 15px;
        text-align: center;
        font-size: 35px;
        & > a {
          list-style: none;
          display: block;
          font-size: 22px;
          margin-top: -15px;
          color: rgba(4, 0, 6, 0.84);
          &.active {
            color: rgb(240, 20, 20);
          }
        }
      }
    }
  }
</style>
