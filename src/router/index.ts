import { createRouter, createWebHashHistory } from 'vue-router'
import InputDemoPage from '../views/InputDemoPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/AppInput',
      name: 'AppInput',
      component: InputDemoPage
    },
  ]
})

export default router
