import { createRouter, createWebHistory } from 'vue-router'
import InputDemoPage from '../views/InputDemoPage.vue'

const router = createRouter({
  history: createWebHistory('/vue-ui-components/'),
  routes: [
    {
      path: '/AppInput',
      name: 'AppInput',
      component: InputDemoPage
    },
  ]
})

export default router
