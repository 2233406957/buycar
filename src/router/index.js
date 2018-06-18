import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld1 from '@/components/index/HelloWorld1'
import HelloWorld2 from '@/components/index/HelloWorld2'
import HelloWorld3 from '@/components/index/HelloWorld3'
import Home from "@/components/home/Home"
import Classify from "@/components/Classify/Classify"
import News from "@/components/News/News"
import Car from "@/components/Car/Car"
import Mine from "@/components/Mine/Mine"
import Index from "@/components/index/Index"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:"/",
      children:[
              {
                path: '/',
                name: 'Index',
                component: Index
              },
              {
                path: '/classify',
                name: 'Classify',
                component: Classify
               
              },
              {
                path: '/news/',
                name: 'News',
                component: News
              },
              {
                path: '/car',
                name: 'Car',
                component: Car
              },
              {
                path: '/mine',
                name: 'Mine',
                component:Mine
              }
      ]
    },
    
  ]
})
