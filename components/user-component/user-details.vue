<template>
  <div class="text-gray-200">
    <!-- Main Avatar Info  -->
    <div class="flex">
      <img
        src="https://source.unsplash.com/user/erondu/1600x900"
        alt=""
        class="w-24 h-24 border-4 rounded-full border-red-500"
      />
      <div
        class="w-5 h-5 rounded-3xl bg-red-500 absolute border-2 border-gray-900"
        style="margin-right: 72px; margin-top: 76px"
      ></div>
      <div class="font-bold mr-3 mt-4">
        <p class="text-3xl">عمرو ابوراس</p>
        <p class="text-xl text-gray-400 mt-1">مطور تطبيقات و مواقع ويب</p>
      </div>
    </div>
    <!-- Main global Info  -->
    <div class="w-full text-gray-300 font-bold text-lg mt-6">
      <ul>
        <li class="inline-block px-3">
          <a href="#">
            <i class="fa fa-user text-red-500 pl-1"></i>مستخدم نشيط
          </a>
        </li>
        <li class="inline-block px-3">
          <a href="#"><i class="fas fa-map-marker text-red-500 pl-1"></i>مصر</a>
        </li>
        <li class="inline-block px-3">
          <a href="#" class="font-sans">
            <i class="fa fa-star text-red-500 pl-1"></i>4.67
          </a>
        </li>
        <li class="inline-block px-3">
          <a href="#" class="font-sans"
            ><i class="fa fa-shopping-cart text-red-500 pl-1"></i>129</a
          >
        </li>
        <li class="inline-block px-3">
          <a href="#" class="font-sans"
            ><i class="fa fa-calendar text-red-500 pl-1"></i>
            24-6-2020
          </a>
        </li>
      </ul>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-10 font-bold text-2xl">
      <user-details-overview />
      <user-details-info />
    </div>
  </div>
</template>

<script>
import userDetailsInfo from './user-details/info.vue'
import userDetailsOverview from './user-details/overview.vue'
export default {
  name: 'user-details-component',
  components: {
    userDetailsInfo,
    userDetailsOverview,
  },
}
</script>

<style></style>
