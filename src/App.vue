<template>
  <div>
    <input type="text" v-model='inputValue' @keyup.enter="handleEnterValue">
    <ul>
      <li v-for="(item, index) of list" :key='index'>{{item}}</li>
    </ul>
    <router-view />
  </div>

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleEnterValue (e) {
      this.list.push(e.target.value)
    }
  }
}
</script>

<style>

</style>
