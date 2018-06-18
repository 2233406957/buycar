<template>
  <div class="car">
    <div v-for="item in msg" :key="item.id">
      <div class="name">
        {{item.name}}
      </div>
      <div>
        ￥{{item.price}}
      </div>
      <button @click="addGoods(item)">购买</button>
    </div>
  </div>
</template>
<script>
import axios  from "axios"
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Car',
  data () {
    return {
      msg: []
    }
  },
  created(){
    this.getFruit()
  },
  methods: {
    getFruit(){
      axios.get("/static/car.json").then(res=>{
        this.msg = res.data
      })
    },
    ...mapActions(['addGoods'])
  },
  computed:mapState({
    goods:state =>state.buycar.goods
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .main
    font-size:0.18rem;
    .car
      display:flex;
       
</style>
