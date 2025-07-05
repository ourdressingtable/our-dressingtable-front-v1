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
              <font-awesome-icon :icon="['far', 'circle-check']" />
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
              <font-awesome-icon icon="fa-regular fa-eye" />
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

        <div class="form-group">
          <label for="name">이름</label>
          <div class="input-wrapper">
            <input
              class="form-input"
              id="name"
              type="text"
              name="name"
              placeholder="이름을 입력해주세요"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="nickname">닉네임</label>
          <div class="input-wrapper">
            <input
              class="form-input"
              id="nickname"
              type="text"
              name="nickname"
              placeholder="이름을 입력해주세요"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="nickname">전화번호</label>
          <div class="input-wrapper">
            <input
              class="form-input"
              id="phone"
              type="tel"
              name="phone"
              placeholder="010-1234-5678"
            />
          </div>
        </div>

         <!-- 피부타입 -->
         <div class="form-group">
          <label for="skinType">피부타입</label>
          <div class="input-wrapper">
            <select class="form-input" id="skinType" name="skinType">
              <option value="NORMAL_SKIN">중성</option>
              <option value="DRY_SKIN">건성</option>
              <option value="OILY_SKIN">지성</option>
              <option value="COMBINATION_SKIN">복합성</option>
              <option value="SENSITIVE_SKIN">민감성</option>
            </select>
          </div>
        </div>

       <!-- 퍼스널 컬러 -->
       <div class="form-group">
          <label for="colorType">퍼스널 컬러</label>
          <div class="input-wrapper">
            <select class="form-input" id="colorType" name="colorType">
              <option value="SPRING_WARM">봄 웜</option>
              <option value="SUMMER_COOL">여름 쿨</option>
              <option value="AUTUMN_WARM">가을 웜</option>
              <option value="WINTER_COOL">겨울 쿨</option>
            </select>
          </div>
        </div>

        <!-- 생년월일 -->
        <div class="form-group">
          <label for="birthDate">생년월일</label>
          <div class="input-wrapper">
            <input class="form-input" id="birthDate" type="date" name="birthDate" />
          </div>
        </div>
        
        
       <!-- 이미지 업로드 -->
      <div class="form-group">
        <label for="image">프로필 이미지</label>
        <div class="input-wrapper">
          <input
            class="form-input"
            id="image"
            type="file"
            name="image"
            accept="image/*"
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