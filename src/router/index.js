import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ZaoYang from '@/components/ZaoYang.vue'
import SuiZhou from '@/components/SuiZhou.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/zaoyang',
      name: 'ZaoYang',
      component: ZaoYang,
      children: [
        {
          path: 'suizhou',
          component: SuiZhou,
        }
      ]
    }
  ]
})
