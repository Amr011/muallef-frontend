<template>
  <div>
    <navbar-component />
    <div class="container mx-auto">
      <div class="container mx-auto">
        <breadcrumb-component />
      </div>
    </div>
    <div class="container mx-auto mt-4 mb-10">
      <product-details-component />
    </div>
    <footer-component />
  </div>
</template>

<script>
import navbarComponent from '../components/navbar-component/navbar.vue'
import footerComponent from '../components/footer-component/footer.vue'
import breadcrumbComponent from '../components/breadcrumb-component/breadcrumb.vue'

import productDetailsComponent from '../components/product-details-component/product-details.vue'

export default {
  name: 'product-details',
  components: {
    productDetailsComponent,
    navbarComponent,
    footerComponent,
    breadcrumbComponent,
  },
}
</script>

<style></style>
