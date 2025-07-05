<template>
  <div class="auth-main">
    <div class="auth-box">
      <h1 class="auth-title">회원가입</h1>

      <form class="auth-form">
        <div class="form-group">
          <label for="email">이메일</label>
          <div class="input-wrapper">
            <input
              class="form-input"
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
            />
            <span class="icon success">
              <img src="@/assets/icons/on.svg" alt="check" />
            </span>
          </div>
        </div>

        <div class="form-group">
          <label for="password">비밀번호</label>
          <div class="input-wrapper">
            <input
              class="form-input"
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호 입력"
            />
            <span class="icon toggle">
              <img src="@/assets/icons/show.svg" alt="eye" />
            </span>
          </div>
        </div>

        <div class="form-group">
          <label for="passwordConfirm">비밀번호 확인</label>
          <div class="input-wrapper">
            <input
              class="form-input"
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 재입력"
            />
          </div>
        </div>

        <button type="submit" class="form-button login">회원가입</button>
      </form>

      <div class="register-link">
        이미 계정이 있으신가요?
        <RouterLink to="/auth/login">로그인</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'RegisterPage',
})
</script>