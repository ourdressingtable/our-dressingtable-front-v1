<template>
  <div class="my-profile-main">
    <section class="profile-header">
      <img :src="user.imageUrl || defaultImage" alt="프로필 이미지" class="profile-image" />
      <div class="profile-info">
        <h2>{{ user.name }}</h2>
        <p class="nickname">@{{ user.nickname }}</p>
      </div>
    </section>

    <section class="profile-details">
      <ul>
        <li>
          <span class="label">이메일</span>
          <span class="value">{{ user.email }}</span>
        </li>
        <li>
          <span class="label">전화번호</span>
          <span class="value">{{ user.phone }}</span>
        </li>
        <li>
          <span class="label">피부타입</span>
          <span class="value">{{ user.skinType }}</span>
        </li>
        <li>
          <span class="label">퍼스널컬러</span>
          <span class="value">{{ user.colorType }}</span>
        </li>
        <li>
          <span class="label">생년월일</span>
          <span class="value">{{ user.birthDate }}</span>
        </li>
      </ul>
    </section>

    <div class="button-wrapper">
      <button class="edit-button" @click="goToEdit">정보 수정</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const defaultImage = '/images/default-profile.png'

const user = ref({
  name: 'STELLA',
  phone: '010-1234-5678',
  nickname: 'stella',
  email: 'stella@example.com',
  skinType: '복합성',
  colorType: '쿨톤',
  birthDate: '1995-08-15',
  imageUrl: '',
})

const goToEdit = () => {
  router.push({ name: 'editProfile' })
}
</script>
