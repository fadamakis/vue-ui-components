import { createRouter, createWebHashHistory } from 'vue-router'
import InputDemoPage from '@/views/InputDemoPage.vue'
import ModalDemoPage from '@/views/ModalDemoPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/AppInput',
      name: 'AppInput',
      component: InputDemoPage
    },
    {
      path: '/AppModal',
      name: 'AppModal',
      component: ModalDemoPage
    },
  ]
})

export default router
