<template>
  <div class="col-span-1 row-span-1 bg-gray-900 rounded-lg">
    <div class="py-4 border-b border-gray-700">
      <p class="px-4">المعلومات الأساسية</p>
    </div>
    <div class="m-8 px-4 py-2 bg-gray-800 rounded-lg">
      <p class="text-red-500 text-xl mb-4 py-2">تواصل مع المؤلّف</p>
      <!-- Email -->
      <div class="my-1">
        <p class="text-lg text-gray-400">البريد الألكتروني</p>
        <input
          type="text"
          class="
            flex-1
            appearance-none
            border border-transparent
            w-full
            py-2
            px-4
            bg-gray-900
            text-gray-300 text-lg
            rounded
            focus:outline-none
            focus:ring-1
            focus:ring-red-500
            focus:border-transparent
          "
          placeholder="ادخل البريد الألكتروني"
        />
      </div>
      <!-- message -->
      <div class="my-1">
        <p class="text-lg text-gray-400">محتوى الرسالة</p>
        <textarea
          type="text"
          class="
            flex-1
            appearance-none
            border border-transparent
            w-full
            py-2
            px-4
            bg-gray-900
            text-gray-300 text-lg
            rounded
            focus:outline-none
            focus:ring-1
            focus:ring-red-500
            focus:border-transparent
          "
          rows="4"
          placeholder="ادخل محتوى الرسالة"
        ></textarea>
      </div>
      <div class="mt-2">
        <button
          class="
            bg-red-500
            mt-2
            text-lg text-white
            py-2
            w-full
            flex
            justify-center
            items-center
            font-bold
            rounded-lg
            mb-2
          "
        >
          <i class="fa fa-message"></i>
          <p class="mr-2">ارسال</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-details-info',
}
</script>

<style></style>
