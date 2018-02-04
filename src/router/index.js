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
      name: 'aa',
      component: aa
    },
    {
      path: '/b',
      name: 'bb',      
      component: bb
    },
    {
      path: '/c',
      name: 'cc',
      component: cc
    },
  ]
})

// 压栈方式
let routerList = []
router.beforeEach((to, from, next) => {
  if (routerList.length && routerList.indexOf(to.name) === routerList.length - 1) {
    // 后退
    routerList.pop()
    console.log(routerList)
    // to.meta.isBack = true
  } else {
    // 前进
    routerList.push(to.name)
    console.log(routerList)
    
    // to.meta.isBack = false
  }
  next()
})

// 链接：https://juejin.im/post/5a69894a518825733b0f12f2

export default router
