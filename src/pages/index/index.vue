<template>
  <div>
    <index-header :city="city"></index-header>
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
      city: '',
      swiperInfo: [],
      iconsInfo: []
    }
  },
  methods: {
    getIndexData () {
      const city = localStorage.city ? localStorage.city : '上海'
      axios.get('/api/index.json?city=' + city)
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      const data = res.data.data
      this.swiperInfo = data.swiperList
      this.iconsInfo = data.iconList
      this.city = data.city
      localStorage.city = data.city
    },
    handleGetDataErr () {
      console.log('error')
    },
    bindEvents () {
      this.$bus.$on('change', this.handleCityChange.bind(this))
    },
    handleCityChange (value) {
      this.city = value
      localStorage.city = value
      this.getIndexData()
    }
  },
  created () {
    this.getIndexData()
    this.bindEvents()
  }
}
</script>
<style scoped>
</style>
