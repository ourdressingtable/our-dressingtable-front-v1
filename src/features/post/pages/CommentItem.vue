<template>
    <div class="comment">
    <div class="comment-header">
        <span class="author"> STELLA </span>
        <span class="date"> 2030.12.25 </span>
    </div>
    <div class="comment-content">좋은 정보 감사합니다!</div>
    <div class="reply" v-if="$slots.default">
        <slot />
    </div>
</div>
</template>