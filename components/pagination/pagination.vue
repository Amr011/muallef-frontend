<template>
  <div class="flex justify-center my-10">
    <ul class="inline-flex">
      <li class="pagination-item">
        <i class="fa fa-angle-double-right"></i>
      </li>
      <li class="pagination-item">89</li>
      <li class="pagination-item hidden lg:block xl:block">...</li>
      <li class="pagination-item">31</li>
      <li class="pagination-item pagination-item-focused">30</li>
      <li class="pagination-item">29</li>
      <li class="pagination-item hidden lg:block xl:block">...</li>
      <li class="pagination-item">1</li>
      <li class="pagination-item"><i class="fa fa-angle-double-left"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pagination-component',
}
</script>

<style>
.pagination-item {
  @apply px-2.5 mx-1 py-1  md:py-1 sm:py-1 border-2  bg-gray-900 text-red-500 font-bold text-base md:text-lg lg:text-lg xl:text-xl border-red-500 hover:bg-red-500 hover:text-white;
  font-family: sans-serif;
}
.pagination-item-focused {
  @apply bg-red-500 text-white;
}
</style>
