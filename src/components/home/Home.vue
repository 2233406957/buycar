<template>
  <div class="home">
  <div class="main">
      <router-view></router-view>
  </div>
    <index-footer></index-footer>
  </div>
</template>

<script>
import  IndexFooter from '../commons/footer'
export default { 
  name: 'Home',
  components:{
    IndexFooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
    .home 
      width:100%;height:100%;display:flex;flex-direction:column;
      .main
       flex:1;overflow:hidden;
</style>
