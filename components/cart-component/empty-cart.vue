<template>
  <div class="flex justify-center bg-gray-900 mx-32 py-16">
    <div class="text-xl font-bold text-gray-300 text-center">
      <p class="text-3xl mb-4">سلة التسوق الخاصة بك فارغة</p>
      <p class="text-xl mb-12 text-gray-400">
        تصفح احدث و افضل المنتجات المميزة لدينا في منصة مؤلف
      </p>
      <nuxt-link to="/" class="bg-red-500 rounded-lg font-bold px-20 py-2.5">
        مواصلة التسوق
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'empty-cart',
}
</script>

<style></style>
