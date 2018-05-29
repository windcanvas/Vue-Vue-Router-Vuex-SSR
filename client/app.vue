<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{counter}}</p>
    <!--<p>{{textC}} {{textPlus}}</p>-->
    <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/login">login</router-link>
    <!--<todo></todo>-->
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

console.log(Header._docs)

export default {
  components: {
    Header,
    Footer
  // Todo
  },
  mounted () {
    console.log(this.$store)
    //    let i = 1
    // this.$store.state.count = 3
    //    this.$store.dispatch('updateCountAsync', {
    //      num: 5,
    //      time: 2000
    //    })
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    //    this.testAction()
    //    this['b/testAction']()
    //    this['a/updateText']('123')
    //    this['a/add']()

    //            setInterval(() => {
    //              this.$store.commit('updateCount', i++)
    //            }, 1000)
    //    setInterval(() => {
    //      this.updateCount({
    //        num: i++,
    //        num2: 2
    //      })
    //    }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    textA () {
      return this.$store.state.b.text
    },
    //   ...mapState(['count']),
    //   ...mapState({
    //     counter: 'count'
    //   }),
    ...mapState({
      counter: (state) => state.count
      //      textA: state => state.a.text,
      //      textC: state => state.c.text
    }),
    //   count () {
    //     return this.$store.state.count
    //   },
    ...mapGetters({
      'fullName': 'fullName'
      //      textPlus: 'a/textPlus'
    })
    //    fullName () {
    //      return this.$store.getters.fullName
    //    }
  }
}
</script>

<style lang="stylus" scoped>
#app {
	position absolute
	left 0
	right 0
	top 0
	bottom 0
}

#cover {
	position absolute
	left 0
	top 0
	right 0
	bottom 0
	background-color #999
	opacity .9
	z-index -1
}
</style>
