<template id="">
  <f7-page>
    HEYYy
  </f7-page>
</template>

<script>
// import HomePage from './components/HomePage'
// import MenuPage from './components/MenuPage'
import F7Page from 'framework7-vue/src/components/page'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    md () {
      return this.$ons.platform.isAndroid()
    }
  },
  computed: {
    menuIsOpen: {
      get () {
        return this.$store.state.splitter.open
      },
      set (newValue) {
        this.$store.commit('splitter/toggle', newValue)
      }
    }
  },
  components: {
    F7Page
    // HomePage,
    // MenuPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
