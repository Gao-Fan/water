<template>
  <div style="display:inline-block;">
    <div
      trigger="click">
      <div class="select">
        <input class="txt" ref="input" type="text" v-model="changeVal" placeholder="搜索用户" @keyup="get($event)"/>
        <ul class="list" v-show="show">
          <li @click="appoint(index)" style="height:30px;line-height:30px;" :class="{keys: index===num}" v-for="(item,index) in restaurants" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <button class="btn" round size="small" @click="popovers" >
      <i class="el-icon-arrow-left"></i>
      adad
<!--       {{this.epdata[this.meta.name]}} -->
    </button>
  </div>
</template>
<script>
export default {
  name: 'ep-search-people',
  props: {
    epdata: Object
  },
  data () {
    return {
      restaurants: [],
      changeVal: '',
      show: false,
      num: -1
    }
  },
  methods: {
    loadAll () {
      return [
        { 'name': '张三', 'id': '1' },
        { 'name': '李四', 'id': '2' },
        { 'name': '麻五', 'id': '3' },
        { 'name': '老刘', 'id': '4' }
      ]
    },
    get (e) {
      var evt = e || window.event
      var code = evt.which || evt.keyCode
      if (this.changeVal !== '') {
        // 发起请求，让list列表显示出来
        this.show = true
        if (code === 38) {
          this.num--
          if (this.num < 0) {
            this.num = this.restaurants.length - 1
          }
          this.changeVal = this.restaurants[this.num] && this.restaurants[this.num].name // 把选中的值赋给input框
        } else if (code === 40) {
          this.num++
          if (this.num > this.restaurants.length - 1) {
            this.num = 0
          }
          this.changeVal = this.restaurants[this.num] && this.restaurants[this.num].name // 把选中的值赋给input框
        } else if (code === 13) {
          this.show = false
          this.popovers()
        }
      } else {
        this.show = false
        this.num = -1
      }
    },
    /**
    * 含义
    * @param index 传下标给定值
    */
    appoint (index) {
      this.num = index
      this.changeVal = this.restaurants[index] && this.restaurants[index].name
    },
    popovers () {
      this.$nextTick(function () {
        console.log(this.$refs['input'])
        this.$refs['input'].focus()
        console.log('点击了')
      })
    }
  },
  created () {
    this.restaurants = this.loadAll()
  }
}
</script>
<style scoped>
.select{
  max-width:200px;
}
.txt{
  display:inline-block;
  width:135px;
  padding-left:5px;
  margin:5px;
  outline:none;
}
.btn{
  min-width:100px;
}
.list{
  margin-top:5px;
  padding-left:5px;
  min-height:50px;
}
.keys{
  background: rgba(254,115,0,0.05);
}
</style>
