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
import MyCosmeticRegisterForm from '@/features/dressingtable/pages/MyCosmeticRegisterForm.vue'
import MyCosmeticRegisterLayout from '@/layouts/MyCosmeticRegisterLayout.vue'
import MyDressingtableListLayout from '@/layouts/MyDressingtableListLayout.vue'
import MyDressingtableList from '@/features/dressingtable/pages/MyDressingtableList.vue'
import MyDressingtableLayout from '@/layouts/MyDressingtableLayout.vue'
import MyDressingtableView from '@/features/dressingtable/pages/MyDressingtableView.vue'
import MyCosmeticDetailView from '@/features/dressingtable/pages/MyCosmeticDetailView.vue'
import MyProfileView from '@/features/member/pages/MyProfileView.vue'
import EditProfileView from '@/features/member/pages/EditProfileView.vue'

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
    path: '/member',
    component: AuthLayout,
    children: [
      { path: 'profile', name: 'myProfile', component: MyProfileView },
      { path: 'profile/edit', name: 'editProfile', component: EditProfileView },
    ],
  },
  {
    path: '/dressingtable',
    component: MyDressingtableListLayout,
    children: [{ path: 'list', name: 'myDressingtaleList', component: MyDressingtableList }],
  },
  {
    path: '/dressingtable/:id',
    component: MyDressingtableLayout,
    children: [
      {
        path: '',
        name: 'myDressingtaleView',
        component: MyDressingtableView,
        props: true,
        meta: { title: '화장대 목록' },
      },
      {
        path: 'cosmetic/:cosmeticId',
        name: 'myCosmeticDeatilView',
        component: MyCosmeticDetailView,
        props: true,
        meta: { title: '화장품 상세' },
      },
    ],
  },
  {
    path: '/dressingtable/:id/add',
    component: MyCosmeticRegisterLayout,
    children: [
      {
        path: '',
        name: 'myCosmeticRegister',
        component: MyCosmeticRegisterForm,
        props: true,
      },
    ],
  },
  // {
  //   path: '/chat',
  //   component: ChatLayout,
  //   children: [{ path: 'chatView', name: 'ChatView', component: ChatView }],
  // },
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
