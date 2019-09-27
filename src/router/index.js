import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: resolve => require(['@/page/Main'], resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/listen',
      name: 'listen',
      component: resolve => require(['@/page/Listen'], resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/collection',
      name: 'collection',
      component: resolve => require(['@/page/Collection'], resolve),
    }
  ]
})
