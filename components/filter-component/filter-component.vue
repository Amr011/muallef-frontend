<template>
  <div>
    <ul class="inline-flex w-full text-gray-50 mb-8">
      <li>
        <button
          class="
            bg-gray-800
            rounded-md
            px-4
            mx-1
            py-1
            text-sm
            md:text-sm
            lg:text-lg
            xl:text-lg
            h-full
            font-bold
            text-gray-300
            hover:text-white hover:bg-red-500
          "
        >
          الأكثر مبيعاً
        </button>
      </li>
      <li>
        <button
          class="
            border-2
            bg-gray-800
            rounded-md
            border-red-500
            px-4
            mx-1
            py-1
            text-sm
            md:text-sm
            lg:text-lg
            xl:text-lg
            font-bold
            text-red-500
            hover:text-white hover:bg-red-500
          "
        >
          الأكثر تقيّماً
        </button>
      </li>
      <li>
        <button
          class="
            bg-gray-800
            rounded-md
            px-4
            mx-1
            py-1
            text-sm
            md:text-sm
            lg:text-lg
            xl:text-lg
            h-full
            font-bold
            text-gray-300
            hover:text-white hover:bg-red-500
          "
        >
          الحصرية
        </button>
      </li>
      <li>
        <button
          class="
            bg-gray-800
            rounded-md
            px-4
            mx-1
            py-1
            text-sm
            md:text-sm
            lg:text-lg
            xl:text-lg
            h-full
            font-bold
            text-gray-300
            hover:text-white hover:bg-red-500
          "
        >
          الأحدث
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'filtering-component',
}
</script>

<style></style>
