<template>
	<div class='icons'>
		<swiper :options="swiperOption">
	    <swiper-slide v-for="(page, index) of pageList" :key="index">
	      <div class='area-con'>
	      	<div class='area-item' v-for="item in page" :key="item.id">
	      		<img :src="item.imgUrl" alt="">
						<p class="area-desc">{{item.title}}</p>
	      	</div>
	      </div>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>	
</template>
<script>
	export default {
		name: 'index-icons',
		props: {
			list: Array
		},
		data () {
			return {
      swiperOption: {
          pagination: '.swiper-pagination',
	      }
	    }
		},
		computed: {
			pageList () {
				const pages = [];
				this.list.forEach((value, index) => {
					const page = Math.floor(index / 8)
					if (!pages[page]) {
						pages[page] = []
					}
					pages[page].push(value)
				})
				return pages
			}
		}
	}
</script>
<style lang='stylus' scoped>
	.icons
		height: 3.8rem
		overflow: hidden
		.area-con
			display: flex
			flex-wrap: wrap
			.area-item
				width: 25%
				height: 1.9rem
				img
					display: block
					width: .9rem
					height: .9rem
					margin: .3rem auto .2rem auto
				.area-desc
					overflow: hidden
					white-space: nowrap
					text-overflow: ellipsis
					line-height: .4rem
					text-align: center
					font-size: .3rem
</style>