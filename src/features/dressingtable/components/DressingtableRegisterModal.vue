<template>
  <div class="o-modal-overlay" @click.self="$emit('close')">
    <div class="c-modal c-modal--simple">
      <header class="c-modal__header">
        <h2>화장대 저장</h2>
      </header>

      <section class="c-modal__body">
        <div class="form-group">
          <label for="name">이름</label>
          <input id="name" type="text" placeholder="화장대 이름을 입력하세요" />
        </div>

        <div class="form-group">
          <label>색상</label>
          <div class="c-color-options">
            <div
              v-for="color in colors"
              :key="color"
              class="c-color-options__circle"
              :style="{ backgroundColor: color }"
              :class="{ 'is-selected': selectedColor === color }"
              @click="selectedColor = color"
            />
          </div>
        </div>
      </section>

      <footer class="c-modal__footer">
        <button class="c-modal-btn c-modal-btn--muted" @click="$emit('close')">취소</button>
        <button class="c-modal-btn c-modal-btn--primary" @click="save">저장</button>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const colors = ['#ffb3c1', '#ffd6a5', '#caffbf', '#a0c4ff', '#cdb4db']
const selectedColor = ref(colors[0])
const save = () => {
  /* ... */
}
</script>

<style lang="scss" scoped>
/* 이 컴포넌트 전용 ‘얇은’ 오버라이드가 필요하면 여기서 */
.c-modal {
  /* 예: 이 모달만 라운드 조금 더 */
  --modal-radius: 16px;
}
</style>
