<template>
  <div>
    <div class="px-6 py-4 font-bold text-2xl border-b border-gray-700">
      {{ title }}
    </div>
    <div class="grid grid-cols-2 my-10 grid-rows-2 gap-8 mx-10">
      <div class="bg-gray-800 flex justify-center py-4 rounded-lg">
        <div class="text-center">
          <i class="fas fa-chart-line text-red-500 fa-lg my-1 text-3xl"></i>
          <p class="text-2xl text-red-500 font-sans my-2">29</p>
          <p class="text-2xl text-gray-400">المبيعات</p>
        </div>
      </div>
      <div class="bg-gray-800 flex justify-center py-4 rounded-lg">
        <div class="text-center">
          <i class="fa fa-dollar-sign text-red-500 fa-lg my-1 text-3xl"></i>
          <p class="text-2xl text-red-500 font-sans my-2">255.29</p>
          <p class="text-2xl text-gray-400">الأرباح</p>
        </div>
      </div>
      <div class="bg-gray-800 flex justify-center py-4 rounded-lg">
        <div class="text-center">
          <i class="fa fa-star text-red-500 fa-lg my-1 text-3xl"></i>
          <p class="text-2xl text-red-500 font-sans my-2">4.8 / 10</p>
          <p class="text-2xl text-gray-400">التقيمات</p>
        </div>
      </div>
      <div class="bg-gray-800 flex justify-center py-4 rounded-lg">
        <div class="text-center">
          <i class="fas fa-shopping-bag text-red-500 fa-lg my-1 text-3xl"></i>
          <p class="text-2xl text-red-500 font-sans my-2">4</p>
          <p class="text-2xl text-gray-400">منتجاتي</p>
        </div>
      </div>
      <div class="bg-gray-800 col-span-2 flex justify-center py-4 rounded-lg">
        <div class="text-center">
          <i class="fa fa-shopping-cart text-red-500 fa-lg my-1 text-3xl"></i>
          <p class="text-2xl text-red-500 font-sans my-2">5</p>
          <p class="text-2xl text-gray-400">مشترياتي</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  name: 'overview',
}
</script>

<style></style>
