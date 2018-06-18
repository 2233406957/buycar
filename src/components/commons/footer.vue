<template>
  <div class="footer">
  <ul>
      <li>
        <i class="fa fa-home"></i>
        <router-link :to="{path:'/'}" >主页</router-link>
      </li>
      <li>
        <i class="fa fa-bars"></i>
        <router-link :to="{path:'/classify'}" >分类</router-link>
      </li>
      <li>
        <i class="fa-envelope-o"></i>
        <router-link :to="{path:'/news'}" >消息</router-link>
      </li>
      <li>
        <i class="fa fa-cart-plus"></i>
        <router-link :to="{path:'/car'}" >购物车</router-link>
      </li>
      <li>
        <i class="fa fa-user" aria-hidden="true"></i>
        <router-link :to="{path:'/mine'}">我的</router-link>
      </li>
  </ul>
  
  
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .footer
    width:100%;height:0.5rem;font-size:0.18rem;
    ul
      display:flex;justify-content:space-around;height:100%;
      li
       display:flex;text-align:center;flex-direction:column;
       i
        width:0.3rem;height:0.3rem;
       a
        height:0.3rem;color:#000;
       .router-link-exact-active
          color:#f00;
        
      
</style>
