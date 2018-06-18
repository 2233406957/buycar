<template>
  <div class="hello">
  <button @click="tab">1</button>
  <button>2</button>
  <button>3</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    tab(){
      this.$router.history.replace('/list')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
