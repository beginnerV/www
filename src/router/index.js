import Vue from 'vue'
import Router from 'vue-router'
import futures from '@/components/futures/index.vue'
import contract from "@/components/contract/index"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'futures',
      component: futures
    },
    {
      path:"/contract",
      name:"contract",
      component:contract
    }
  ]
})
