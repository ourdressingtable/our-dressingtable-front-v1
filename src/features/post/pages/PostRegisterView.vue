<template>
  <main class="post-create-main">
    <form class="post-form" @submit.prevent="handleSubmit">
      <!-- 제목 -->
      <div class="form-field">
        <label for="title">제목</label>
        <input
          id="title"
          v-model.trim="form.title"
          type="text"
          placeholder="제목을 입력하세요"
          maxlength="80"
          required
        />
        <small class="counter">{{ form.title.length }}/80</small>
      </div>

      <!-- 카테고리 -->
      <div class="form-field">
        <label for="category">카테고리</label>
        <select id="category" v-model="form.category" required>
          <option disabled value="">선택해주세요</option>
          <option value="free">자유</option>
          <option value="qna">질문</option>
          <option value="review">후기</option>
          <option value="deal">신상/할인</option>
        </select>
      </div>

      <!-- 이미지 업로드 -->
      <div class="form-field">
        <label>대표 이미지 (선택)</label>
        <div class="uploader" @click="fileInput?.click()">
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            class="hidden"
            @change="onFileChange"
          />
          <div v-if="previewUrl" class="preview">
            <img :src="previewUrl" alt="미리보기" />
            <button type="button" class="remove" @click.stop="clearImage">삭제</button>
          </div>
          <div v-else class="placeholder">
            <Icon name="ImagePlus" :size="20" />
            <span>이미지 추가</span>
          </div>
        </div>
      </div>

      <!-- 내용 -->
      <div class="form-field">
        <label for="content">내용</label>
        <textarea
          id="content"
          v-model.trim="form.content"
          rows="8"
          placeholder="내용을 입력하세요"
          required
        />
      </div>

      <!-- 태그(선택) -->
      <div class="form-field">
        <label for="tags">태그 (쉼표로 구분)</label>
        <input id="tags" v-model.trim="tagsInput" type="text" placeholder="예) 립틴트, 여쿨" />
        <small class="hint">예: 스킨, 지성, 여쿨 → ‘, ’로 구분</small>
      </div>

      <!-- 버튼 -->
      <div class="button-row">
        <button type="button" class="cancel" @click="goBack">취소</button>
        <button type="submit" class="submit" :disabled="submitting || !isValid">
          {{ submitting ? '등록 중...' : '등록' }}
        </button>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '@/components/BaseIcon.vue'

type Category = '' | 'free' | 'qna' | 'review' | 'deal'

interface PostCreateForm {
  title: string
  category: Category
  content: string
  imageFile?: File | null
  tags: string[]
}

const router = useRouter()

const form = reactive<PostCreateForm>({
  title: '',
  category: '',
  content: '',
  imageFile: null,
  tags: [],
})

const tagsInput = ref('')
const fileInput = ref<HTMLInputElement | null>(null)
const previewUrl = ref<string | null>(null)
const submitting = ref(false)

const isValid = computed(() => !!form.title && !!form.category && !!form.content)

const onFileChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (!files || !files[0]) return
  const file = files[0]
  form.imageFile = file
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  previewUrl.value = URL.createObjectURL(file)
}

const clearImage = () => {
  form.imageFile = null
  if (fileInput.value) fileInput.value.value = ''
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = null
  }
}

onBeforeUnmount(() => {
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
})

const goBack = () => {
  router.back()
}

const handleSubmit = async () => {
  if (!isValid.value) return
  submitting.value = true

  try {
    form.tags = tagsInput.value
      ? tagsInput.value
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean)
      : []

    // 실제 API 전송 형태 (예: multipart)
    const fd = new FormData()
    fd.append('title', form.title)
    fd.append('category', form.category)
    fd.append('content', form.content)
    fd.append('tags', JSON.stringify(form.tags))
    if (form.imageFile) fd.append('image', form.imageFile)

    // await api.post('/api/posts', fd)  // 실제 API 연결 시 사용

    // 데모: 성공 처리
    alert('게시글이 등록되었습니다.')
    router.replace({ name: 'PostListView' }) // 목록 라우트명에 맞게 수정
  } catch (e) {
    console.error(e)
    alert('등록 중 오류가 발생했어요.')
  } finally {
    submitting.value = false
  }
}
</script>
