<template>
    <div class="slide-container">
      <swiper :options="swiperOption" v-if="list.length">
        <swiper-slide v-for="item of list" :key="item.id">
          <div class="slide-container">
            <img class="slide-img" :src="item.imgUrl" alt="">
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
export default {
  name: 'index-swiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination'
      }
    }
  }

}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl"
.slide-container
  overflow: hidden
  height: 0
  padding-bottom: 31.25%
.slide-img
  width: 100%;
.swiper-pagination >>> .swiper-pagination-bullet-active
  background: $bgColor
</style>
