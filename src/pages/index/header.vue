<template>
  <div class='header' ref='head'>
    <div class='back iconfont'>&#xe697;</div>
    <div class="search">
      <span class='iconfont search-icon'>&#xe6ac;</span>请输入内容
    </div>
    <div class="city" @click="handleCutyClick">
      {{doubleCity}}
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index-header',
  computed: {
    ...mapGetters(['doubleCity'])
  },
  methods: {
    handleCutyClick () {
      this.$refs.head.style.background = 'red'
      //this.$router.push('/city')
    },
    sayHello () {
      alert('hello')
    }
  }
}
</script>
<style lang='stylus' scoped>
  @import "../../assets/stylus/varibles.styl"
  .redHeader
    background: red
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    .back
      width: .58rem
      text-align: center
      font-size: .4rem
      font-weight: bold
      color: #fff
    .search
      flex: 1
      height: .6rem
      line-height: .6rem
      margin: .14rem .2rem
      background: #fff
      border-radius: .1rem
      font-size: .3rem
      color: #919191
      padding-left: .4rem
      .search-icon
        position: relative
        top: .02rem
        padding-right: .04rem
    .city
      position: relative
      padding-right: .6rem
      color: #fff
      font-size: .3rem
      &:before
        position: absolute
        content: '\0020'
        width: 0
        height: 0
        top: .38rem
        right: .2rem
        border-left: .14rem solid transparent
        border-right: .14rem solid transparent
        border-top: .14rem solid #fff
</style>
