<template>
  <div class="mine">
    <div v-for="item in goods" :key="item.id">
      <dl>
        <dt>{{item.name}}</dt>
        <dd>单价￥{{item.price}}</dd>
        <li>数量：{{item.num}}</li>
        <li>总价：{{item.price}}*{{item.num}}元</li>
      </dl>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Mine',
  data () {
    return {
     goods:[]
    }
  },
  created(){
    this.getState()
    
  },
  methods:{
    getState(){
     this.goods=this.$store.state.buycar.goods
     console.log(this.goods)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
