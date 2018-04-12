<template>
  <div>City</div>
</template>
<script>
export default {
  name: 'City',
  mounted () {
    this.getDayTripInfo()
    console.log(this.$route.params.id)
  },
  watch: {
    '$route' () {
      this.getDayTripInfo()
    }
  },
  methods: {
    getDayTripInfo () {
      console.log(1)
    }
  }
}
</script>
<style scoped>
</style>
