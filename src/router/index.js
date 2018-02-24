import Vue from 'vue'
import Router from 'vue-router'

import aa from '@/components/a'
import bb from '@/components/b'
import cc from '@/components/c'
import detail1 from '@/components/detail1'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/a'
    },
    {
      path: '/a',
      component: aa,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/b',
      component: bb,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/c',
      component: cc,
      meta: {
        keepAlive: true
      },
      children: [
        // {
        //   path: 'detail1',
        //   name: 'detail1',
        //   component: detail1
        // }
      ]
    },
    {
      path: '/detail1',
      name: 'detail1',
      component: detail1
    }
  ]
})

// 压栈方式(not good)
// let routerList = []
// router.beforeEach((to, from, next) => {
//   if (routerList.length && routerList.indexOf(to.name) === routerList.length - 1) {
//     // 后退
//     routerList.pop()
//     console.log(routerList)
//     // to.meta.isBack = true
//   } else {
//     // 前进
//     routerList.push(to.name)
//     console.log(routerList)

//     // to.meta.isBack = false
//   }
//   next()
// })
// 链接：https://juejin.im/post/5a69894a518825733b0f12f2

export default router
