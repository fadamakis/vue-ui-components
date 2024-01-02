import { createRouter, createWebHistory } from 'vue-router'
import InputDemoPage from '../views/InputDemoPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'input',
      component: InputDemoPage
    },
  ]
})

export default router
