<template>
	<div class='header'>
		<div class='back iconfont'>&#xe697;</div>
		<div class="search">
			<span class='iconfont search-icon'>&#xe6ac;</span>请输入内容
		</div>
		<div class="city">
			哈萨克斯坦
		</div>
	</div>
</template>
<script>
export default {
	name: 'index-header'
}
</script>
<style lang='stylus' scoped>
	@import "../../assets/stylus/varibles.styl"
	.header 
		display: flex
		height: .88rem
		line-height: .88rem
		background:	$bgColor
		.back
			width: .58rem
			text-align: center
			font-size: .4rem
			font-weight: bold
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
			padding-right: .6rem
			font-size: .3rem
			position: relative
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