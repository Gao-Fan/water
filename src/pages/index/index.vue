<template>
	<div>
	  <index-header></index-header>
	  <index-swiper :list="swiperInfo"></index-swiper>
	  <index-icons :list="iconsInfo"></index-icons>
    <div>123</div>
	</div>
</template>
<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcons from './icons'
import axios from 'axios'
export default {
  name: 'Index',
  components: {
  	IndexHeader,
  	IndexSwiper,
    IndexIcons
  },
  data () {
    return {
      swiperInfo:[],
      iconsInfo: []
    }
  },
  created () {
  	this.getIndexData();
  },
  methods: {
  	getIndexData (){
  		axios.get('/api/index.json')
		   .then(this.handleGetDataSucc.bind(this))
		   .catch(this.handleGetDataErr.bind(this))
  	},
  	handleGetDataSucc (res) {
  		const data = res.data.data
      this.swiperInfo = data.swiperList
      this.iconsInfo = data.iconList
  	},
  	handleGetDataErr () {
  		console.log('error')
  	} 
  }
}
</script>
<style scoped>
</style>
