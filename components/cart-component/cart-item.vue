<template>
  <div>
    <div class="w-full grid grid-cols-1 bg-gray-900">
      <div class="border-t border-b border-gray-800 grid grid-cols-3 gap-4">
        <div class="h-36 flex justify-start">
          <img
            src="https://i.ytimg.com/vi/zi44OSnSjvI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCa38HloUbBkQ7VMC6HA_PKzwpk7A"
            alt=""
          />
        </div>
        <div class="font-bold">
          <div class="text-gray-200 text-2xl my-4">مدونة وردبريس</div>
          <div class="text-gray-500">
            بواسطة <a class="text-gray-400" href="#">عمرو ابوراس</a>
          </div>
          <div class="text-gray-500 flex">
            <div class="ml-2">
              الترخيص : <a class="text-gray-400" href="#">عادي</a>
            </div>
            <div class="mr-2">
              الدعم الفني : <a class="text-gray-400" href="#"> 6 شهور</a>
            </div>
          </div>
        </div>
        <div class="font Bold my-4 mx-6">
          <div class="flex justify-center">
            <div class="ml-2">
              <nuxt-link to=""><i class="fa fa-edit"></i></nuxt-link>
            </div>
            <div class="mr-2">
              <nuxt-link to=""><i class="fa fa-times"></i></nuxt-link>
            </div>
          </div>
          <div
            class="
              cart-price
              flex
              justify-center
              font-bold
              text-2xl text-red-500
            "
          >
            29$
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart-item',
}
</script>

<style>
.cart-price {
  font-family: sans-serif;
}
</style>
