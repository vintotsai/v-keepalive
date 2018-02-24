## vin-keepalive -- A Vue.js project

> 方案一：压栈方式

业务场景不复杂可尝试。

> 方案二(推荐)：使用 keepalive 组件的 max 属性(vue 版本达到 v2.5.x)，辅以 router-view 的 key 值动态绑定

router.js

```javascript
    {
      path: '/home',
      component: Home,
      name: 'home',
      meta: {
        keepAlive: true, // 需要被keepalive的组件/页面
        title: '首页'
      }
    }
```

app.vue

```html
<keep-alive :max="5">
  <router-view v-if="$route.meta.keepAlive" :key="key"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive" :key="key"></router-view>
```

```javascript
// 区分相同组件的关键
computed: {

    key() {
      return this.$route.fullPath
    }
}
```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
