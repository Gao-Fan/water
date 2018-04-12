<template>
  <div>
    <index-header></index-header>
    <div v-for="(item, index) in list" :key="index">
      {{item}}
    </div>
  </div>
</template>
<script>
import IndexHeader from './header.vue'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    IndexHeader
  },
  props: ['id'],
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getDayTripInfo()
  },
  watch: {
    id () {
      this.getDayTripInfo()
    }
  },
  methods: {
    getDayTripInfo () {
      axios.get('/api/daytrip.json?id=' + this.id)
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      this.list = res.data.data.list
    },
    handleGetDataErr () {

    }
  }
}
</script>
<style scoped>
</style>
