<template>
  <div>
    <index-header></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconsInfo"></index-icons>
    <index-sights></index-sights>
  </div>
</template>
<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcons from './icons'
import IndexSights from './sights'
import axios from 'axios'
export default {
  name: 'Index',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons,
    IndexSights
  },
  data () {
    return {
      swiperInfo: [],
      iconsInfo: []
    }
  },
  methods: {
    getIndexData () {
      axios.get('/api/index.json?city=' + this.$store.state.city)
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      const data = res.data.data
      this.swiperInfo = data.swiperList
      this.iconsInfo = data.iconList
      if (!this.$store.state.city) {
        this.$store.dispatch('changeCityDelayFiveSeconds', data.city)
        // setTimeout( () => {
        //   this.$store.commit('changeCity', data.city)
        // })        
      }
    },
    handleGetDataErr () {
      console.log('error')
    }
  },
  created () {
    this.getIndexData()
  },
  watch: {
    "$store.state.city" () {
      this.getIndexData()
    }
  }
}
</script>
<style scoped>
</style>
