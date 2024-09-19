import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import LoginPage from '../components/Login/LoginPage.vue'
import NotebookView from '@/components/Notebooks/NotebookView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path:'/notebooks',
    name:'notebooks',
    component :NotebookView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
