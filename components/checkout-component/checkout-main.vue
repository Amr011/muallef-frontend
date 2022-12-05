<template>
  <div
    class="
      col-span-3
      lg:col-span-2
      xl:col-span-2
      bg-gray-900
      rounded-lg
      text-gray-50
      max-h-72
    "
  >
    <div
      class="px-8 pt-4 pb-2 bg-gray-800 w-full rounded-t-lg grid grid-cols-10"
    >
      <div class="col-span-8">
        <p class="text-2xl font-bold">وسائل الدفع المتاحة</p>
        <p class="text-lg pt-1 text-gray-400">
          نحن لا نبيع التفاصيل الخاصة بك او نشاركها دون اذنك اقرأ المزيد في
          <nuxt-link to="/" class="text-red-500 opacity-95"
            >سياسة الخصوصية</nuxt-link
          >
          الخاصة بنا .
        </p>
      </div>
      <div class="col-span-2">
        <nuxt-link
          to="/cart"
          class="
            bg-gray-700
            py-2
            rounded-lg
            border-2 border-red-500
            text-red-500
            font-bold
            flex
            justify-center
            text-center
          "
        >
          <i
            class="fa fa-edit mx-2 mt-1 text-left lg:text-right xl:text-right"
          ></i>
          <p class="text-lg">تعديل السلة</p>
        </nuxt-link>
      </div>
    </div>
    <div class="p-8 text-xl font-bold text-gray-200">
      ادفع بامان من خلال احدى وسائل الدفع التالية
    </div>
    <div class="px-8 pt-0 lg:pt-4 xl:pt-4 pb-8 flex z-50">
      <div
        class="
          bg-gray-800
          rounded-lg
          py-1.5
          px-10
          ml-3
          font-bold
          text-red-500 text-xl
          border-2 border-red-500
        "
      >
        <a href="#">PAYPAL</a>
      </div>
      <div
        class="
          bg-gray-800
          rounded-lg
          py-1.5
          px-10
          ml-3
          font-bold
          text-red-500 text-xl
          border-2 border-red-500
        "
      >
        <a href="#">STRIPE</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkout-main',
}
</script>

<style></style>
