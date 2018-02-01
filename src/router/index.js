import Vue from 'vue'
import Router from 'vue-router'

import aa from '@/components/a'
import bb from '@/components/b'
import cc from '@/components/c'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/a'
    },
    {
      path: '/a',
      component: aa
    },
    {
      path: '/b',
      component: bb
    },
    {
      path: '/c',
      component: cc
    },
  ]
})

router.beforeRouteEnter((to, from, next) => {
  // 压栈方案 适合没tab得场景
})

export default router