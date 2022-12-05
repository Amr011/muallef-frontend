<template>
  <div>
    <navbar-component />

    <div class="container mx-auto">
      <div class="container w-3/4 //mx-auto"><breadcrumb-component /></div>
    </div>

    <div class="container mx-auto mt-4 mb-10">
      <div class="w-full text-gray-200 font-bold text-3xl mb-6">
        ادفع بشكل امن
      </div>
      <div class="grid grid-cols-3 gap-4">
        <checkout-main-component />
        <order-summery-component class="my-2 lg:my-0 xl:my-0" />
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
import navbarComponent from '../components/navbar-component/navbar.vue'
import footerComponent from '../components/footer-component/footer.vue'
import breadcrumbComponent from '../components/breadcrumb-component/breadcrumb.vue'

import checkoutMainComponent from '../components/checkout-component/checkout-main.vue'
import orderSummeryComponent from '../components/checkout-component/order-summary.vue'

export default {
  name: 'checkout',
  components: {
    navbarComponent,
    footerComponent,
    breadcrumbComponent,
    checkoutMainComponent,
    orderSummeryComponent,
  },
}
</script>

<style></style>
