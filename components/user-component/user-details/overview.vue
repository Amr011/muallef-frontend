<template>
  <div class="col-span-2 row-span-2 rounded-lg">
    <div class="bg-gray-900 rounded-lg pb-8">
      <div class="border-b border-gray-800 text-lg rounded-t-lg">
        <ul class="flex text-gray-300">
          <li
            class="ml-4 py-2 px-4 rounded-tr-lg"
            :class="
              page == 0
                ? ' border-b-2 border-red-500 text-red-500'
                : 'bg-none text-gray-300'
            "
          >
            <button class="flex items-center" @click="page = 0">
              <i class="fa fa-user ml-2"></i>
              <p class="font-bold">الملف الشخصي</p>
            </button>
          </li>
          <li
            class="ml-4 py-2 px-4 bg-opacity-50"
            :class="
              page == 1
                ? ' border-b-2 border-red-500 text-red-500'
                : 'bg-none text-gray-300'
            "
          >
            <button class="flex items-center" @click="page = 1">
              <i class="fa fa-shopping-bag ml-2"></i>
              <p class="font-bold">معرض الأعمال والمنتجات</p>
            </button>
          </li>
          <li
            class="ml-4 py-2 px-4 bg-opacity-50"
            :class="
              page == 2
                ? ' border-b-2 border-red-500 text-red-500'
                : 'bg-none text-gray-300'
            "
          >
            <button class="flex items-center" @click="page = 2">
              <i class="fa fa-newspaper ml-2"></i>
              <p class="font-bold">اراء العملاء</p>
            </button>
          </li>
        </ul>
      </div>
      <div class="my-8 mx-8 text-gray-300">
        <about-overview-user-details v-if="page == 0" />
        <portfolio-overview-user-details
          v-if="page == 1"
          :portfolioItmes="[1, 23, 4, 6]"
        />
        <review-overview-user-details v-if="page == 2" />
      </div>
    </div>
  </div>
</template>

<script>
import aboutOverviewUserDetails from './overview/about.vue'
import portfolioOverviewUserDetails from './overview/portfolio.vue'
import reviewOverviewUserDetails from './overview/review.vue'
export default {
  name: 'user-details-overview',
  components: {
    aboutOverviewUserDetails,
    portfolioOverviewUserDetails,
    reviewOverviewUserDetails,
  },
  data() {
    return {
      page: 0,
    }
  },
}
</script>

<style></style>
