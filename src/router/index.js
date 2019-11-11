import Vue from 'vue'
import Router from 'vue-router'
import changePassword from '@/components/ChangePassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cambioClave',
      name: 'changePassword',
      component: changePassword
    },
  ]
})
