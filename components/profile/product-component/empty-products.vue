<template>
  <div class="flex justify-center my-12">
    <div class="text-gray-200">
      <h1 class="text-2xl flex justify-center">{{ emptyMessage }}</h1>
      <p class="text-lg text-gray-400 flex justify-center my-4">
        {{ emptySubMessage }}
      </p>

      <div class="flex justify-center">
        <button
          class="
            border border-red-500
            bg-gray-800
            text-red-500
            font-bold
            rounded
            text-center
            py-2
            px-8
          "
          @click="switchToCreateProduct()"
        >
          اضف اول منتج
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'empty-product',
  props: {
    emptyMessage: { type: String },
    emptySubMessage: { type: String },
    switchToCreateProduct: { type: Function },
  },
  components: {},
}
</script>

<style></style>
