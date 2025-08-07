import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/features/home/pages/Home.vue'
import LoginPage from '@/features/auth/pages/Login.vue'
import RegisterPage from '@/features/auth/pages/Register.vue'
import NotFoundPage from '@/errors/NotFound.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import ChatView from '@/features/chat/pages/ChatView.vue'
import PostLayout from '@/layouts/PostLayout.vue'
import PostDetail from '@/features/post/pages/PostDetailView.vue'
import ChatListView from '@/features/chat/pages/ChatListView.vue'
import NotificationView from '@/features/notification/pages/NotificationView.vue'
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
import BaseLayout from '@/layouts/BaseLayout.vue'
import PageLayout from '@/layouts/PageLayout.vue'

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
    component: BaseLayout,
    children: [
      {
        path: 'profile',
        name: 'myProfile',
        component: MyProfileView,
        meta: {
          title: '회원 정보',
          hasDropdown: true,
          dropdownItems: [{ label: '회원 탈퇴', value: 'withdraw' }],
        },
      },
    ],
  },
  {
    path: '/member/profile',
    component: BaseLayout,
    children: [
      {
        path: '/edit',
        name: 'editProfile',
        component: EditProfileView,
        meta: {
          title: '회원 정보 수정',
          hasDropdown: true,
        },
      },
    ],
  },
  {
    path: '/dressingtable',
    component: MyDressingtableListLayout,
    children: [{ path: '', name: 'myDressingtaleList', component: MyDressingtableList }],
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
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'ChatListView',
        component: ChatListView,
        meta: {
          title: '채팅',
          hasDropdown: true,
          dropdownItems: [{ label: '채팅 선택', value: 'select' }],
        },
      },
    ],
  },
  {
    path: '/chat/:id',
    component: PageLayout,
    children: [
      {
        path: '',
        name: 'ChatView',
        component: ChatView,
        meta: {
          hasDropdown: true,
          dropdownItems: [
            { label: '나가기', value: 'leave' },
            { label: '신고', value: 'report', danger: true },
          ],
        },
      },
    ],
  },
  {
    path: '/post',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'PostListView',
        component: PostListView,
        meta: {
          title: '커뮤니티',
          hasDropdown: true,
          dropdownItems: [{ label: '게시글 선택', value: 'selecte' }],
        },
      },
    ],
  },
  {
    path: '/post/:id',
    component: PostLayout,
    children: [{ path: '', name: 'PostDetail', component: PostDetail, props: true }],
  },
  {
    path: '/notification',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'notificationView',
        component: NotificationView,
        meta: {
          title: '알림',
          hasDropdown: true,
          dropdownItems: [{ label: '알림 선택', value: 'selecte' }],
        },
      },
    ],
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
