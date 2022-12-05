<template>
  <div class="my-2 mx-4">
    <div class="grid grid-cols-1 justify-center">
      <div class="grid grid-cols-4 gap-2 bg-gray-800 rounded-lg">
        <div class="col-span-1 rounded-r-lg">
          <img
            class="rounded-lg m-2"
            src="../../../Screenshot_7.png"
            width="240"
            height="240"
            alt=""
          />
        </div>
        <div class="col-span-2 my-2 mx-4">
          <div class="text-xl">مدونة وردبريس عربية</div>
          <p class="text-lg text-gray-400 mt-3">
            هذا وصف لمدونة ورد بريس خارقة للعادة
          </p>
          <div class="font-sans text-red-500 text-xl font-bold">49$</div>
          <div class="text-gray-400 flex text-xl font-bold">
            <p>الحالة</p>
            <p class="text-red-500 mr-1">قيد المراجعة</p>
          </div>
        </div>
        <div
          class="
            col-span-1
            m-2
            font-bold
            grid grid-cols-1
            text-center text-red-500
          "
        >
          <nuxt-link
            class="
              bg-gray-900
              mb-1
              flex
              justify-center
              items-center
              font-bold
              rounded-lg
            "
            to="/product-details"
          >
            <i class="fa fa-eye"></i>
            <p class="mr-2">معاينة</p>
          </nuxt-link>

          <button
            class="
              bg-gray-900
              mb-1
              flex
              justify-center
              items-center
              font-bold
              rounded-lg
            "
            @click="switchToUpdateProduct()"
          >
            <i class="fa fa-edit"></i>
            <p class="mr-2">تعديل</p>
          </button>

          <button
            class="
              bg-gray-900
              mb-1
              flex
              justify-center
              items-center
              font-bold
              rounded-lg
            "
          >
            <i class="fa fa-trash"></i>
            <p class="mr-2">حذف</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'read-product',

  props: {
    switchToUpdateProduct: { type: Function },
  },
}
</script>

<style></style>
