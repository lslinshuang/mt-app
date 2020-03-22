import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default.vue'
import BlankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import GoodsList from '@/page/goodsList.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DefaultPage',
      component: DefaultPage,
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        },
        {
          path:'/changeCity',
          name:'changeCity',
          component:ChangeCity,
        },
        {
          path:'/goodsList',
          name:'goodsList',
          component:GoodsList,
        }
      ]
    },
    {
      path: '/BlankPage',
      name: 'BlankPage',
      component: BlankPage,
      children:[
        {
          path:'/login',
          name:'login',
          component:Login
        },
        {
          path:'/register',
          name:'register',
          component:Register
        }
      ]
    }

  ]
})
