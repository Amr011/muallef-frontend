<template>
  <div>
    <div class="px-6 py-4 font-bold text-2xl border-b border-gray-700">
      {{ title }}
    </div>

    <create-product-component
      v-if="createNewProduct == true && updateProduct == false"
    />

    <update-product-component
      v-if="updateProduct == true && createNewProduct == false"
    />
    <empty-product-component
      v-if="
        products.length <= 0 &&
        createNewProduct == false &&
        updateProduct == false
      "
      :switchToCreateProduct="switchToCreateProductComponent"
      :emptyMessage="'لا يوجد اي منتج هنا'"
      :emptySubMessage="'يبدو انك لم تضيف اي منتج حتى الأن, يمكنك البدئ في اضافة العناصر من هنا'"
    />
    <div
      class="my-8"
      v-else-if="createNewProduct == false && updateProduct == false"
    >
      <div class="flex justify-center">
        <button
          class="
            border border-red-500
            mx-4
            mb-6
            mt-2
            text-red-500
            py-2
            w-full
            flex
            justify-center
            items-center
            font-bold
            rounded-lg
          "
          @click="switchToCreateProductComponent()"
        >
          <i class="fa fa-plus"></i>
          <p class="mr-2">اضافة منتج</p>
        </button>
      </div>
      <read-product-component
        :switchToUpdateProduct="switchToUpdateProductComponent"
      />
      <read-product-component
        :switchToUpdateProduct="switchToUpdateProductComponent"
      />
      <read-product-component
        :switchToUpdateProduct="switchToUpdateProductComponent"
      />
    </div>
  </div>
</template>

<script>
import createProductComponent from './product-component/create-product.vue'
import emptyProductComponent from './product-component/empty-products.vue'
import readProductComponent from './product-component/read-product.vue'
import updateProductComponent from './product-component/update-product.vue'
export default {
  props: ['title'],
  name: 'product',
  data() {
    return {
      products: [1, 2],
      createNewProduct: false,
      updateProduct: false,
    }
  },
  components: {
    emptyProductComponent,
    updateProductComponent,
    readProductComponent,
    createProductComponent,
  },
  methods: {
    switchToCreateProductComponent() {
      this.createNewProduct = !this.createNewProduct
    },
    switchToUpdateProductComponent() {
      this.updateProduct = !this.updateProduct
    },
  },
}
</script>

<style></style>
