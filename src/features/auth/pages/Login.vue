<template>
  <div class="auth-main">
    <h1 class="auth-title">로그인</h1>
    <div class="auth-box">
      <form class="auth-form">
        <div class="form-group">
          <label for="이메일">이메일</label>
          <div class="input-wrapper">
            <input
              class="form-input"
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="비밀번호">비밀번호</label>
          <div class="input-wrapper">
            <input class="form-input" id="password" type="password" name="password" />
            <span class="icon toggle">
              <Icon name="Eye" />
            </span>
          </div>
          <div class="forgot-password">
            <a href="#">비밀번호 찾기</a>
          </div>
        </div>

        <button type="submit" class="form-button login">로그인</button>
      </form>

      <div class="social-login-section">
        <div class="divider"><span>Login with</span></div>
        <div class="social-buttons">
          <button class="social google">
            <img :src="googleIcon" alt="google" />
          </button>
          <button class="social kakao">
            <img :src="kakaoIcon" alt="kakao" />
          </button>
          <button class="social apple">
            <img :src="appleIcon" alt="apple" />
          </button>
          <button class="social naver">
            <img :src="naverIcon" alt="naver" />
          </button>
          <button class="social github">
            <img :src="githubIcon" alt="github" />
          </button>
        </div>
      </div>

      <!-- 회원 가입 링크 -->
      <div class="register-link">
        계정이 없다면?
        <RouterLink to="/auth/register"> 회원 가입 </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import googleIcon from '@/assets/social/google.svg?url'
import kakaoIcon from '@/assets/social/kakao.svg?url'
import appleIcon from '@/assets/social/apple.svg?url'
import naverIcon from '@/assets/social/naver.svg?url'
import githubIcon from '@/assets/social/github.svg?url'
import Icon from '@/components/BaseIcon.vue'

defineOptions({
  name: 'LoginPage',
})
</script>
