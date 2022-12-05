<template>
  <div>
    <navbar-component :cartItemsCount="myCartItems.length" />

    <div class="container mx-auto">
      <breadcrumb-component />
      <div class="mb-8">
        <empty-cart-component
          v-if="myCartItems.length == 0"
          class="mb-24 mt-8 rounded-lg"
        />
        <cart-component
          :emptyCartItems="deleteAllCartItems"
          :cartItems="myCartItems"
          v-else
        />
      </div>
    </div>

    <footer-component />
  </div>
</template>

<script>
import navbarComponent from '../components/navbar-component/navbar.vue'
import footerComponent from '../components/footer-component/footer.vue'

import breadcrumbComponent from '../components/breadcrumb-component/breadcrumb.vue'

import cartComponent from '../components/cart-component/cart.vue'
import emptyCartComponent from '../components/cart-component/empty-cart.vue'
export default {
  name: 'cart',
  components: {
    cartComponent,
    emptyCartComponent,
    navbarComponent,
    footerComponent,
    breadcrumbComponent,
  },
  data() {
    return {
      myCartItems: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    deleteAllCartItems() {
      this.myCartItems = []
    },
  },
}
</script>

<style></style>
