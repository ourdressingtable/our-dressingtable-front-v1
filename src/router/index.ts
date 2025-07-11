import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/features/home/pages/Home.vue'
import LoginPage from '@/features/auth/pages/Login.vue'
import RegisterPage from '@/features/auth/pages/Register.vue'
import NotFoundPage from '@/errors/NotFound.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import ChatLayout from '@/layouts/ChatLayout.vue'
import ChatView from '@/features/chat/pages/ChatView.vue'
import PostLayout  from '@/layouts/PostLayout.vue'
import PostDetail from '@/features/post/pages/PostDetail.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', name: 'Home', component: HomePage }],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'login', name: 'Login', component: LoginPage },
      { path: 'register', name: 'Register', component: RegisterPage },
    ],
  },
  {
    path: '/chat',
    component: ChatLayout,
    children: [
      { path: 'chatView', nmae: 'ChatView', component: ChatView}
    ]
  },
  {
    path: '/post/',
    component: PostLayout,
    children: [
      { path: 'postDetail', nmae: 'PostDetail', component: PostDetail}
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
