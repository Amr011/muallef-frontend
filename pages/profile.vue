<template>
  <div>
    <navbar-component />

    <div class="container mx-auto">
      <div class="container w-3/4 //mx-auto">
        <breadcrumb-component />
      </div>
    </div>
    <div class="text-gray-300">
      <div class="grid grid-cols-3 container mx-auto my-12">
        <div class="col-span-1 row-span-1 grid gap-4 grid-cols-1">
          <div
            class="
              bg-gray-900
              font-semibold
              text-lg
              py-4
              w-11/12
              mx-auto
              rounded-lg
            "
          >
            <div class="text-center py-4">
              <div class="flex justify-center">
                <img
                  src="https://source.unsplash.com/user/erondu/1600x900"
                  alt=""
                  class="w-24 h-24 border-4 rounded-full border-red-500"
                />
                <div
                  class="
                    w-5
                    h-5
                    rounded-3xl
                    bg-red-500
                    absolute
                    border-2 border-gray-900
                    -ml-16
                  "
                  style="margin-top: 74px"
                ></div>
              </div>
              <p class="text-2xl mt-4">عمرو ابوراس</p>
            </div>
          </div>

          <div
            class="
              bg-gray-900
              font-semibold
              text-lg
              py-4
              w-11/12
              mx-auto
              rounded-lg
            "
          >
            <div
              class="border-b border-gray-800 py-3"
              @click="page = 1"
              :class="page == 1 ? 'bg-red-500' : 'bg-none'"
            >
              <nuxt-link to="">
                <p class="px-8">
                  <i class="fa fa-home fa-lg ml-4"></i>الرئيسية
                </p>
              </nuxt-link>
            </div>

            <div
              class="border-b border-gray-800 py-3"
              @click="page = 2"
              :class="page == 2 ? 'bg-red-500' : 'bg-none'"
            >
              <nuxt-link to="">
                <p class="px-8">
                  <i class="fa fa-tools fa-lg ml-6"></i>اعداداتي
                </p>
              </nuxt-link>
            </div>

            <!--        <div class="border-b border-gray-800 py-3" >
              <nuxt-link to="">
                <p class="px-8">
                  <i class="fa fa-phone fa-lg ml-6"></i>الدعم الفني
                </p>
              </nuxt-link>
            </div> -->

            <div
              class="border-b border-gray-800 py-3"
              :class="page == 3 ? 'bg-red-500' : 'bg-none'"
              @click="page = 3"
            >
              <nuxt-link to="">
                <p class="px-8">
                  <i class="fas fa-shopping-bag fa-lg ml-6"></i>منتجاتي
                </p>
              </nuxt-link>
            </div>

            <div
              class="border-b border-gray-800 py-3"
              @click="page = 4"
              :class="page == 4 ? 'bg-red-500' : 'bg-none'"
            >
              <nuxt-link to="">
                <p class="px-8">
                  <i class="fas fa-dollar-sign fa-lg ml-6"></i>الرصيد
                </p>
              </nuxt-link>
            </div>

            <div
              class="border-b border-gray-800 py-3"
              @click="page = 5"
              :class="page == 5 ? 'bg-red-500' : 'bg-none'"
            >
              <nuxt-link to=""
                ><p class="px-8">
                  <i class="fas fa-chart-line fa-lg ml-6"></i>مبيعاتي
                </p>
              </nuxt-link>
            </div>

            <div
              class="border-b border-gray-800 py-3"
              @click="page = 6"
              :class="page == 6 ? 'bg-red-500' : 'bg-none'"
            >
              <nuxt-link to="">
                <p class="px-8">
                  <i class="fa fa-shopping-cart fa-lg ml-6"></i>مشترياتي
                </p>
              </nuxt-link>
            </div>

            <div
              class="border-b border-gray-800 py-3"
              @click="page = 7"
              :class="page == 7 ? 'bg-red-500' : 'bg-none'"
            >
              <nuxt-link to="">
                <p class="px-8">
                  <i class="fa fa-star fa-lg ml-6"></i>التقيمات
                </p></nuxt-link
              >
            </div>

            <div class="border-gray-800 py-3">
              <nuxt-link to="">
                <p class="px-8">
                  <i class="fas fa-sign-out-alt fa-lg ml-6"></i>تسجيل الخروج
                </p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- page section -->
        <div
          class="
            bg-gray-900
            font-bold
            text-lg
            w-full
            row-span-2
            col-span-2
            rounded-lg
          "
        >
          <overview-component :title="'الصفحة الرئيسية'" v-if="page == 1" />
          <setting-component :title="'اعدادات الحساب'" v-if="page == 2" />
          <product-component :title="'المنتجات'" v-if="page == 3" />
          <balance-component :title="'الرصيد'" v-if="page == 4" />
          <salles-component :title="'المبيعات'" v-if="page == 5" />
          <purchase-component :title="'المشترايات'" v-if="page == 6" />
          <review-component :title="'التقيمات'" v-if="page == 7" />
        </div>

        <!-- page section -->
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
import navbarComponent from '../components/navbar-component/navbar.vue'
import footerComponent from '../components/footer-component/footer.vue'
import breadcrumbComponent from '../components/breadcrumb-component/breadcrumb.vue'

import overviewComponent from '../components/profile/overview.vue'
import settingComponent from '../components/profile/setting.vue'
import productComponent from '../components/profile/product.vue'
import balanceComponent from '../components/profile/balance.vue'
import sallesComponent from '../components/profile/salles.vue'
import purchaseComponent from '../components/profile/purchase.vue'
import reviewComponent from '../components/profile/review.vue'

export default {
  name: 'profile',
  components: {
    navbarComponent,
    footerComponent,
    breadcrumbComponent,
    overviewComponent,
    settingComponent,
    productComponent,
    balanceComponent,
    sallesComponent,
    purchaseComponent,
    reviewComponent,
  },

  data() {
    return {
      page: 1,
    }
  },
}
</script>

<style></style>
