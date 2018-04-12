<template>
  <div class="header-container">
      <header class="header">
        <router-link to="/">
          <div class="header-left iconfont">
            &#xe697;
          </div>
        </router-link>
        <div class="header-title">
          <div class="area-switch">国内</div>
        </div>
      </header>
  </div>
</template>

<script scoped>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
  .header-container
    position: fixed
    left: 0
    top: 0
    height: .88rem
    width: 100%
    background: #00bcd4
    .header
      display: flex
      flex-direction: row
      justify-content: center
      align-items: center
      height: .88rem
      overflow: hidden
      text-align: center
      background: #00bcd4
      .header-left
        position: absolute
        left: 0
        top: 0
        padding: 0 .1rem
        width: .58rem
        font-size: .4rem
        font-weight: bold
        line-height: .88rem
        color: #fff
      .header-title
        display: flex
        flex-direction: row
        width: 2rem
        height: .56rem
        color: #fff
        .area-switch
          width: 2rem
          font-size: .4rem
          border: 1px solid #fff
          border-radius: 0.1rem
          line-height: .54rem
          background: #fff
          color: #00bcd4
</style>
