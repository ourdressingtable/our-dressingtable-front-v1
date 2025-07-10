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
} from '@fortawesome/free-solid-svg-icons' // solid
import {
  faEye as faEyeRegular,
  faCircleCheck as faCircleCheckRegular,
} from '@fortawesome/free-regular-svg-icons' // regular

library.add(
  faEye,
  faEyeRegular,
  faUser,
  faLock,
  faCircleCheck,
  faCircleCheckRegular,
  faArrowLeft,
  faEllipsisVertical,
  faPaperPlane,
)

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
