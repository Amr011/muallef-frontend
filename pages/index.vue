<template>
  <div>
    <navbar-component />
    <div class="container mx-auto">
      <div class="container w-3/4 //mx-auto">
        <breadcrumb-component />
      </div>
      <div class="md:w-full sm:w-full">
        <filtering-component />
      </div>
    </div>
    <empty-product-component v-if="productsData.length < 0" />
    <div class="flex justify-center mb-6" v-else>
      <div
        class="
          grid
          gap-4
          grid-cols-1
          sm:grid-cols-1
          md:grid-col-2
          lg:grid-cols-2
          xl:grid-cols-3
        "
      >
        <product-component
          v-for="product in productsData"
          :key="product.id"
          :name="product.name"
          :title="product.title"
          :content="product.conent"
        />
      </div>
      <div class="sticky">
        <advanced-filter-component
          :filterName="'التقيمات'"
          :filterIcon="'fa fa-star'"
          :filterValue="'4.5'"
          class="hidden xl:grid"
        />
        <advanced-filter-component
          :filterName="'عدد المبيعات'"
          :filterIcon="'fa fa-shopping-cart'"
          :filterValue="'200'"
          class="hidden xl:grid"
        />
        <advanced-filter-component
          :filterName="'مجال التسعير'"
          :filterIcon="'fa fa-dollar-sign fa-lg'"
          :filterValue="'49'"
          class="hidden xl:grid"
        />
        <advanced-filter-component
          :filterName="'التاريخ الإضافة'"
          :filterIcon="'fa fa-calendar'"
          :filterValue="'2022'"
          class="hidden xl:grid"
        />
        <div
          class="
            hidden
            xl:grid
            justify-center
            mr-12
            mt-10
            text-lg text-gray-200
            font-bold
          "
        >
          جميع الحقوق محفوظة 2021©
        </div>
      </div>
    </div>
    <pagination-component />
    <footer-component />
  </div>
</template>

<script>
import navbarComponent from '../components/navbar-component/navbar.vue'
import footerComponent from '../components/footer-component/footer.vue'

import breadcrumbComponent from '../components/breadcrumb-component/breadcrumb.vue'
import filteringComponent from '../components/filter-component/filter-component.vue'
import advancedFilterComponent from '../components/filter-component/advanced-filter-component.vue'

import productComponent from '../components/product-grid-component/product.vue'
import emptyProductComponent from '../components/product-grid-component/empty-product.vue'
import paginationComponent from '~/components/pagination/pagination.vue'

import * as axios from 'axios'

export default {
  components: {
    navbarComponent,
    footerComponent,
    productComponent,
    emptyProductComponent,
    paginationComponent,
    breadcrumbComponent,
    filteringComponent,
    advancedFilterComponent,
  },
  data() {
    return {
      productsData: [1, 2, 3, 4, 5, 6, 7, 8],
    }
  },
  created() {
    this.getAllProducts()
  },
  methods: {
    async getAllProducts() {
      const products = await axios.get(`http://localhost:5000/api/v1/products`)
      this.productsData = [...this.productsData, products.data.data.products]
    },
  },
}
</script>
<style></style>
