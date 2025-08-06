<template>
  <div class="edit-profile-main">
    <h1 class="title">내 정보 수정</h1>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">이름</label>
        <input id="name" v-model="form.name" type="text" />
      </div>

      <div class="form-group">
        <label for="nickname">닉네임</label>
        <div class="input-wrapper">
          <input class="form-input" id="nickname" type="text" v-model="form.nickname" />
        </div>
      </div>

      <div class="form-group">
        <label for="skinType">피부타입</label>
        <select class="form-input" id="skinType" name="skinType" v-model="form.skinType">
          <option value="">선택</option>
          <option value="NORMAL_SKIN">중성</option>
          <option value="DRY_SKIN">건성</option>
          <option value="OILY_SKIN">지성</option>
          <option value="COMBINATION_SKIN">복합성</option>
          <option value="SENSITIVE_SKIN">민감성</option>
        </select>
      </div>

      <div class="form-group">
        <label for="colorType">퍼스널컬러</label>
        <select class="form-input" id="colorType" name="colorType" v-model="form.colorType">
          <option value="">선택</option>
          <option value="SPRING_WARM">봄 웜</option>
          <option value="SUMMER_COOL">여름 쿨</option>
          <option value="AUTUMN_WARM">가을 웜</option>
          <option value="WINTER_COOL">겨울 쿨</option>
        </select>
      </div>

      <div class="form-group">
        <label for="birthDate">생년월일</label>
        <input id="birthDate" v-model="form.birthDate" type="date" />
      </div>

      <div class="form-group">
        <label for="image">프로필 이미지</label>
        <div class="input-wrapper">
          <input class="form-input" id="image" type="file" name="image" accept="image/*" />
        </div>
      </div>

      <div class="button-wrapper">
        <button type="button" class="form-button cancel" @click="goToProfile">취소</button>
        <button type="submit" class="form-button">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  imageUrl: '',
  name: '백상은',
  nickname: 'stella',
  skinType: 'COMBINATION_SKIN',
  colorType: 'AUTUMN_WARM',
  birthDate: '1995-08-15',
})

const goToProfile = () => {
  router.push({ name: 'myProfile' })
}

const handleSubmit = () => {
  console.log('제출됨:', form)
  router.push({ name: 'myProfile' })
}
</script>
