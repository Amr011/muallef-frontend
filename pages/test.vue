<template>
  <div class="my-64 py-20 bg-gray-900 text-center">
    <validate-component />

    <div class="flex justify-center self-center">
      <h1 class="text-gray-300 text-4xl font-extrabold">صفحة اختبار</h1>
    </div>
    <div class="flex justify-center self-center py-4">
      <p class="text-gray-400 text-lg">
        هذه الصفحة فقط للإختبار يمكنك الرجوع الى الصفحة الرئيسية
      </p>
    </div>
    <div class="flex justify-center self-center py-4">
      <nuxt-link
        to="/"
        class="px-6 py-2 text-gray-100 text-lg font-bold rounded-lg bg-red-500"
        >الصفحة الرئيسية</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import validateComponent from '../components/alert-component/validate.vue'
export default {
  name: 'test',
  components: {
    validateComponent,
  },
}
</script>

<style></style>
