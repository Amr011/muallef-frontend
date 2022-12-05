<template>
  <div>
    <div class="w-full text-gray-200 font-bold text-3xl mb-6">
      سلة التسوق الخاصة بي
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div
        class="col-span-3 lg:col-span-2 xl:col-span-2 text-gray-50 rounded-lg"
      >
        <div
          class="
            w-full
            grid grid-cols-2
            text-lg
            font-bold
            rounded-t-xl
            py-4
            text-red-500
            bg-gray-800
          "
        >
          <div class="flex justify-start mx-6">
            <nuxt-link
              to="/"
              class="bg-gray-900 px-4 py-1.5 border-2 border-red-500 rounded-xl"
              >مواصلة التسوق
            </nuxt-link>
          </div>
          <div class="flex justify-end mx-6">
            <button
              @click="emptyCartItems()"
              class="
                bg-gray-900
                px-4
                py-1.5
                border-2
                font-bold
                border-red-500
                rounded-xl
              "
            >
              <i class="fa fa-times ml-1 pt-0.5"></i> افراغ السلة
            </button>
          </div>
        </div>

        <!--Cart Item-->
        <cart-item v-for="cart in cartItems" :key="cart" />
        <!--Cart Item-->

        <div
          class="
            w-full
            text-lg
            font-bold
            rounded-b-xl
            py-4
            text-red-500
            bg-gray-800
          "
        >
          <div class="flex justify-end mx-6">
            <a href="#" class="px-1 py-1 rounded-xl text-gray-200">
              المجموع :</a
            >
            <a href="#" class="cart-price px-1 py-1 rounded-xl"> 29$ </a>
          </div>
        </div>
      </div>
      <div class="col-span-3 xl:col-span-1 lg:col-span-1 grid grid-cols-1">
        <div class="rounded-xl text-gray-50 px-0 py-0">
          <div class="w-full rounded-xl bg-gray-900">
            <div
              class="
                text-xl
                h-12
                flex
                items-center
                justify-center
                border-b border-gray-700
                font-bold
              "
            >
              تفاصيل الفاتورة
            </div>
            <div
              class="
                text-3xl
                h-10
                flex
                items-center
                justify-center
                text-red-500
                font-bold
                my-6
                cart-price
              "
            >
              29$
            </div>
            <div class="flex justify-center">
              <div
                class="
                  h-10
                  flex
                  items-center
                  justify-center
                  w-11/12
                  bg-red-500
                  rounded-xl
                  text-xl
                  my-5
                  text-white
                  font-bold
                "
              >
                <nuxt-link to="/checkout"> اذهب الى الدفع </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartItem from './cart-item.vue'

export default {
  name: 'cart-component',
  components: {
    cartItem,
  },
  props: {
    emptyCartItems: {
      type: Function,
    },
    cartItems: {
      type: Array,
      default: function () {
        return [1, 2, 4, 5]
      },
    },
  },
}
</script>

<style></style>
