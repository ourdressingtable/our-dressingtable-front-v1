import '@/assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEye,
  faCircleCheck,
  faUser,
  faLock,
  faArrowLeft,
  faEllipsisVertical,
  faPaperPlane,
  faHeart,
  faComment,
  faArrowRight,
  faHouse,
  faMagnifyingGlass,
  faMessage,
  faBell,
} from '@fortawesome/free-solid-svg-icons' // solid
import {
  faEye as faEyeRegular,
  faCircleCheck as faCircleCheckRegular,
  faHeart as faHeartRegular,
  faComment as faCommentRegular,
  faMessage as faMessageRegular,
  faBell as faBellRegular,
  faUser as faUserRegular,
} from '@fortawesome/free-regular-svg-icons' // regular

library.add(
  faEye,
  faEyeRegular,
  faUser,
  faUserRegular,
  faLock,
  faCircleCheck,
  faCircleCheckRegular,
  faArrowLeft,
  faEllipsisVertical,
  faPaperPlane,
  faHeart,
  faHeartRegular,
  faComment,
  faCommentRegular,
  faArrowRight,
  faHouse,
  faMagnifyingGlass,
  faMessage,
  faMessageRegular,
  faBell,
  faBellRegular,
)

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
