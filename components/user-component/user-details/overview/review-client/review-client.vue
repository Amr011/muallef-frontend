<template>
  <div class="bg-gray-800 rounded-lg py-3 px-4 my-4">
    <!-- Main Avatar Info  -->
    <div class="flex items-center">
      <img
        src="https://source.unsplash.com/user/erondu/1600x900"
        alt=""
        class="w-16 h-16 border-2 rounded-full border-red-500"
      />
      <div
        class="w-4 h-4 rounded-3xl bg-red-500 absolute border-2 border-gray-900"
        style="margin-right: 48px; margin-top: 48px"
      ></div>
      <div class="font-bold mr-3">
        <p class="text-2xl">عمرو ابوراس</p>
        <div class="flex items-center">
          <ul class="flex text-red-500 text-lg mt-1">
            <li><i class="fa fa-star fa-sm"></i></li>
            <li><i class="fa fa-star fa-sm"></i></li>
            <li><i class="fa fa-star fa-sm"></i></li>
            <li><i class="fa fa-star fa-sm"></i></li>
            <li><i class="fa fa-star fa-sm"></i></li>
          </ul>
          <p class="font-sans text-lg text-gray-400 mr-2">4.5 / 10</p>
        </div>
      </div>
    </div>
    <p class="text-xl text-gray-400 mt-3">
      عمرو مطور محترف صاحب منتجات قوية انصح الجميع بالشراء منه
    </p>
  </div>
</template>

<script>
export default {
  name: 'reviewClientOverviewUserDetails',
}
</script>

<style></style>
