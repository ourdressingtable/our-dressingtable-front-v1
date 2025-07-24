import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/features/home/pages/Home.vue'
import LoginPage from '@/features/auth/pages/Login.vue'
import RegisterPage from '@/features/auth/pages/Register.vue'
import NotFoundPage from '@/errors/NotFound.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import ChatLayout from '@/layouts/ChatLayout.vue'
import ChatView from '@/features/chat/pages/ChatView.vue'
import PostLayout from '@/layouts/PostLayout.vue'
import PostDetail from '@/features/post/pages/PostDetailView.vue'
import ChatListLayout from '@/layouts/ChatListLayout.vue'
import ChatListView from '@/features/chat/pages/ChatListView.vue'
import NotificationLayout from '@/layouts/NotificationLayout.vue'
import NotificationView from '@/features/notification/pages/NotificationView.vue'
import PostListLayout from '@/layouts/PostListLayout.vue'
import PostListView from '@/features/post/pages/PostListView.vue'

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
    children: [{ path: 'chatView', name: 'ChatView', component: ChatView }],
  },
  {
    path: '/chat',
    component: ChatListLayout,
    children: [{ path: 'chatListView', name: 'ChatListView', component: ChatListView }],
  },
  {
    path: '/chat/:id',
    component: ChatLayout,
    children: [{ path: '', name: 'ChatView', component: ChatView }],
  },
  {
    path: '/post',
    component: PostListLayout,
    children: [{ path: 'postList', name: 'PostListView', component: PostListView }],
  },
  {
    path: '/post/:id',
    component: PostLayout,
    children: [{ path: '', name: 'PostDetail', component: PostDetail, props: true }],
  },
  {
    path: '/notification',
    component: NotificationLayout,
    children: [{ path: 'notificationView', name: 'notificationView', component: NotificationView }],
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
