<template>
  <div
    class="
      col-span-3
      lg:col-span-1
      xl:col-span-1
      mb-4
      lg:mb-0
      xl:mb-0
      bg-gray-900
      rounded-lg
      text-gray-50
    "
  >
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
      ملخص الطلب
    </div>
    <div class="font-bold w-full text-xl my-6">
      <ul class="mx-8">
        <li class="grid grid-cols-3 gap-4 border-b border-gray-800 py-2">
          <div class="col-span-2 flex justify-start text-gray-300">
            <p>مدونتي - مدونة وردبريس عربية</p>
          </div>
          <div
            class="col-span-1 flex justify-end text-2xl font-sans text-red-500"
          >
            <p>29.99$</p>
          </div>
        </li>
        <li class="grid grid-cols-3 gap-4 border-b border-gray-800 py-2">
          <div class="col-span-2 flex justify-start text-gray-300">
            <p>مدونتي - مدونة وردبريس عربية</p>
          </div>
          <div
            class="col-span-1 flex justify-end text-2xl font-sans text-red-500"
          >
            <p>29.99$</p>
          </div>
        </li>
        <li class="grid grid-cols-3 gap-4 border-b border-gray-800 py-2">
          <div class="col-span-2 flex justify-start text-gray-300">
            <p>مدونتي - مدونة وردبريس عربية</p>
          </div>
          <div
            class="col-span-1 flex justify-end text-2xl font-sans text-red-500"
          >
            <p>29.99$</p>
          </div>
        </li>
        <li class="grid grid-cols-3 gap-4 border-b border-gray-800 py-2">
          <div class="col-span-2 flex justify-start text-gray-300">
            <p>مدونتي - مدونة وردبريس عربية</p>
          </div>
          <div
            class="col-span-1 flex justify-end text-2xl font-sans text-red-500"
          >
            <p>29.99$</p>
          </div>
        </li>
      </ul>
      <div class="mt-8 mx-8 grid grid-cols-2 gap-4 bottom-full">
        <div class="flex justify-start text-xl">
          <p>الإجمالي :</p>
        </div>
        <div class="flex justify-end text-3xl text-red-500 font-sans">
          249.69$
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-summery',
}
</script>

<style></style>
