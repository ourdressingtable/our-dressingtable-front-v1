<template>
  <div class="my-cosmetic-card">
    <div class="my-cosmetic-card__image">
      <span class="my-cosmetic-card__brand">{{ cosmetic.brand }}</span>
      <img v-if="cosmetic.image" :src="cosmetic.image" :alt="cosmetic.name" />
    </div>
    <div class="my-cosmetic-card__name">
      {{ cosmetic.name }}
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  cosmetic: {
    id: number
    image?: string
    name: string
    brand: string
  }
}>()
</script>
<style scoped lang="scss">
.my-cosmetic-card {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  border: 1px solid #f9cdd1;

  .my-cosmetic-card__image {
    position: relative;
    flex: 1;
    background-color: #fbe4e6;
    display: flex;
    align-items: center;
    justify-content: center;

    // img {
    //   width: 50%;
    //   height: 50%;
    //   object-fit: cover;
    // }

    .brand-label {
      position: absolute;
      top: 8px;
      left: 8px;
      background-color: #fff6f7;
      color: #444;
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 500;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
  }

  .name {
    padding: 10px;
    font-size: 15px;
    text-align: center;
    font-weight: 500;
    color: #5a3a3a;
  }
}
</style>
