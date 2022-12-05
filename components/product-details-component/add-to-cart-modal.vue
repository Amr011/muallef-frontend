<template>
  <div>
    <div class="flex justify-center items-center">
      <button
        class="
          text-lg
          w-10/12
          border border-red-500
          py-2
          my-2
          rounded-xl
          text-red-500 text-pri
          font-bold
        "
        @click="addToCartActivateModal = false"
      >
        <i class="fas fa-shopping-cart ml-1"></i> اضف الى السلة
      </button>
    </div>

    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      :class="{ hidden: addToCartActivateModal }"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="min-h-2.1 pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="
            fixed
            inset-0
            bg-gray-800 bg-opacity-75
            transition-opacity
            duration-150
          "
          aria-hidden="true"
        ></div>

        <span
          class="sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="
            inline-block
            bg-gray-900
            rounded-lg
            text-left
            overflow-hidden
            shadow-xl
            transform
            transition-colors
            max-w-min
            sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
          "
        >
          <div
            class="
              text-gray-200
              flex
              justify-center
              text-3xl
              border-b-2 border-gray-800
              py-3
              font-bold
            "
          >
            تخصيص المنتج
          </div>
          <div class="my-2 py-2 grid grid-cols-2">
            <div class="flex justify-start mr-4">
              <p class="text-gray-100 font-bold text-lg mb-2 ml-2">
                حدد ترخيصاً
              </p>
            </div>

            <div class="flex justify-end ml-4">
              <p class="text-gray-100 font-bold text-lg mb-2 mr-2">حدد الدعم</p>
            </div>
            <div class="flex justify-start group mr-4">
              <button
                class="font-bold px-4 py-2 rounded-xl bg-gray-800 text-gray-300"
              >
                الترخيص الممدد <i class="fa fa-caret-down mr-0.5"></i>
              </button>
              <div
                class="
                  absolute
                  group-hover:scale-100
                  scale-0
                  transition-all
                  text-right
                  mt-10
                  bg-gray-800
                  duration-150
                  border border-gray-600
                  rounded-lg
                "
              >
                <div class="my-2 font-bold">
                  <div class="hover:bg-gray-700 px-2">
                    <p class="text-lg text-gray-300">ترخيص عادي</p>
                    <p class="text-md pt-1 text-gray-400">
                      هذا الترخيص يحوي على العديد من الشغلات
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end ml-4">
              <button
                class="font-bold px-4 py-2 rounded-xl bg-gray-800 text-gray-300"
              >
                دعم فني 6 شهور <i class="fa fa-caret-down mr-0.5"></i>
              </button>
            </div>
          </div>
          <div class="my-2 bg-gray-800 border-gray-700 py-6 grid grid-cols-3">
            <div class="w-11/12">
              <img src="https://source.unsplash.com/random" alt="" />
            </div>
            <div class="col-span-2 mr-4">
              <div class="text-right">
                <div class="">
                  <p class="text-lg font-bold text-gray-300">
                    مدونة وردبريس عربية
                  </p>
                  <p class="text-md font-bold text-gray-400">الترخيص الممدد</p>
                  <p class="text-md font-bold text-gray-400">دعم فني 6 شهور</p>

                  <p class="text-2xl font-bold mt-2 font-sans text-red-500">
                    29.99$
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="my-2 grid grid-cols-2 py-2">
            <div class="flex justify-start mr-4">
              <nuxt-link
                class="
                  border-2
                  font-bold
                  px-4
                  my-2
                  py-2
                  border-red-500
                  rounded-xl
                  bg-gray-800
                  text-red-500
                "
                to="/cart"
              >
                <i class="fa fa-plus"></i> اضافة الى السلة
              </nuxt-link>
            </div>
            <div class="flex justify-end ml-4">
              <button
                class="
                  font-bold
                  px-4
                  py-2
                  my-2
                  rounded-xl
                  bg-gray-800
                  text-red-500
                "
                @click="addToCartActivateModal = true"
              >
                الغاء
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-tor-cart-modal-component',
  data() {
    return {
      addToCartActivateModal: true,
    }
  },
}
</script>

<style></style>
