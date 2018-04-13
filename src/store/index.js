import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    city: localStorage.city || ''
  },
  getters: {
    doubleCity (state) {
      return state.city + state.city
    }
  },
  actions: {
    changeCityDelayFiveSeconds (context, city) {
      setTimeout( () => {
          context.commit('changeCity', city)
        }, 5000) 
    }
  },
  mutations: {
    changeCity (state, city) {
      localStorage.city = city
      state.city = city
    }
  }
})

export default store
