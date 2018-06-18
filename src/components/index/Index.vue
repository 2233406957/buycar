<template>
  <div class="index">
    <div class="header">
      <dl>
        <dt>朝阳区</dt>
        <dd>
          <input type="text"/>
        </dd>
      </dl>
    </div>
    <div class="nav">

    </div>
  </div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import axios from "axios"
export default {
  name: 'Index',
  data (){
    return {  
      active: 'tab-container1'  
    }
  },
 created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('/abc/web/api/floors/v1?label=0&page=1&random=0')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      this.getIndexData = res
      this.swiperData = res.data.data.container.floor[0].content
      console.log(this.swiperData)
    },
    handleGetDataErr () {
      console.log('error')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .header
    width:100%;height:0.44rem;font-size:0.18rem;
    dl
      display:flex;justify-content:space-around;line-height:0.44rem;
      dd
        input 
         border:1px solid #000;
 
    .nav1
     width:100%;height:0.4rem;
</style>
