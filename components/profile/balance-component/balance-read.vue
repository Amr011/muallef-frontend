<template>
  <div>
    <div class="grid grid-cols-2 my-10 grid-rows-2 gap-8 mx-10">
      <div class="bg-gray-800 flex justify-center py-4 rounded-lg col-span-2">
        <div class="text-center">
          <i class="fas fa-dollar-sign text-red-500 fa-lg my-1 text-3xl"></i>
          <p class="text-2xl text-red-500 font-sans my-2">239</p>
          <p class="text-2xl text-gray-400">الرصيد الكلي</p>
        </div>
      </div>
      <div class="bg-gray-800 flex justify-center py-4 rounded-lg">
        <div class="text-center">
          <i class="fas fa-dollar-sign text-red-500 fa-lg my-1 text-3xl"></i>
          <p class="text-2xl text-red-500 font-sans my-2">55</p>
          <p class="text-2xl text-gray-400">الرصيد المعلّق</p>
        </div>
      </div>
      <div class="bg-gray-800 flex justify-center py-4 rounded-lg">
        <div class="text-center">
          <i class="fas fa-dollar-sign text-red-500 fa-lg my-1 text-3xl"></i>
          <p class="text-2xl text-red-500 font-sans my-2">129</p>
          <p class="text-2xl text-gray-400">الرصيد القابل للسحب</p>
        </div>
      </div>
      <div class="mt-2 col-span-2">
        <button
          class="
            border border-red-500
            mt-2
            text-red-500
            hover:bg-red-500 hover:text-white
            py-2
            w-full
            flex
            justify-center
            items-center
            font-bold
            rounded-lg
            mb-12
          "
        >
          <i class="fa fa-dollar-sign"></i>
          <p class="mr-2">سحب الرصيد</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'balance-read',
}
</script>

<style></style>
