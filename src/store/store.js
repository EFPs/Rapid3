import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    splitter: {
      namespaced: true,
      state: {
        open: false,
        user: null,
        error: null,
        loading: false
      },
      mutations: {
        toggle (state, shouldOpen) {
          if (typeof shouldOpen === 'boolean') {
            state.open = shouldOpen
          } else {
            state.open = !state.open
          }
        },
        setUser (state, payload) {
          state.user = payload
        },
        setError (state, payload) {
          state.error = payload
        },
        setLoading (state, payload) {
          state.loading = payload
        }
      }
    }
  }
})
