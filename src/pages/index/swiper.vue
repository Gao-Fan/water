<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <div class="slide-container">
        <img class="slide-img" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4205239905,2630274881&fm=27&gp=0.jpg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div  class="slide-container">
        <img class="slide-img" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1602868589,1519538783&fm=27&gp=0.jpg" alt="">
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'index-swiper',
  data() {
    return {
        swiperOption: {
            loop: true,
            pagination : '.swiper-pagination',
        }
    }
  }
}
</script>
<style lang="stylus" scoped>
.slide-container 
  overflow: hidden
  height: 0
  padding-bottom: 31.25%
.slide-img
  width: 100%;    
.swiper-pagination >>> .swiper-pagination-bullet-active
  background: red !important
</style>
