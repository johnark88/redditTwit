import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import twitter from '@/components/twitter'
import reddit from '@/components/reddit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/twitter',
      name: 'twitter',
      component: twitter
    },
    {
      path: '/reddit',
      name: 'reddit',
      component: reddit
    }
  ]
})
