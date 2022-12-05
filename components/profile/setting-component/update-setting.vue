<template>
  <div class="flex justify-center">
    <div class="my-4">
      <div class="text-center py-4">
        <div class="flex justify-center">
          <img
            src="https://source.unsplash.com/user/erondu/1600x900"
            alt=""
            class="w-24 h-24 border-4 rounded-full border-red-500"
          />
          <div
            class="
              rounded-full
              bg-red-500
              -ml-16
              absolute
              border-2 border-gray-900
            "
            style="margin-top: 75px"
          >
            <div class="fa text-center fa-camera py-2 px-2"></div>
          </div>
        </div>
        <p class="text-xl mt-5 text-gray-400">تعديل الصورة الشخصية</p>
      </div>
      <div class="pb-4">
        <div class="grid grid-cols-2 gap-4 my-2">
          <div>
            <p class="mb-1 text-gray-400 font-bold">الأسم الأول</p>

            <input
              type="text"
              class="
                flex-1
                appearance-none
                border border-transparent
                w-full
                py-2
                px-4
                bg-gray-800
                text-gray-300 text-lg
                rounded
                focus:outline-none
                focus:ring-1
                focus:ring-red-500
                focus:border-transparent
              "
              placeholder="الأسم الأول"
            />
          </div>
          <div>
            <p class="mb-1 text-gray-400 font-bold">الأسم الثاني</p>
            <input
              type="text"
              class="
                flex-1
                appearance-none
                border border-transparent
                w-full
                py-2
                px-4
                bg-gray-800
                text-gray-300 text-lg
                rounded
                focus:outline-none
                focus:ring-1
                focus:ring-red-500
                focus:border-transparent
              "
              placeholder="الأسم الثاني"
            />
          </div>
        </div>
        <div class="my-1">
          <p class="text-lg text-gray-400">نبذة عني</p>
          <textarea
            type="text"
            class="
              flex-1
              appearance-none
              border border-transparent
              w-full
              py-2
              px-4
              bg-gray-800
              text-gray-300 text-lg
              rounded
              focus:outline-none
              focus:ring-1
              focus:ring-red-500
              focus:border-transparent
            "
            rows="4"
            placeholder="نبذة عني"
          ></textarea>
        </div>

        <div class="my-2">
          <p class="mb-1 text-gray-400 font-bold">البريد الإلكتروني</p>

          <input
            type="text"
            class="
              flex-1
              appearance-none
              border border-transparent
              w-full
              py-2
              px-4
              bg-gray-800
              text-gray-300 text-lg
              rounded
              focus:outline-none
              focus:ring-1
              focus:ring-red-500
              focus:border-transparent
            "
            placeholder="عنوان البريد الإلكتروني"
          />
        </div>
        <div class="my-2">
          <p class="mb-1 text-gray-400 font-bold">كلمة المرور الحالية</p>

          <input
            type="password"
            class="
              flex-1
              appearance-none
              border border-transparent
              w-full
              py-2
              px-4
              bg-gray-800
              text-gray-300 text-lg
              rounded
              focus:outline-none
              focus:ring-1
              focus:ring-red-500
              focus:border-transparent
            "
            placeholder="كلمة المرور الحالية"
          />
        </div>
        <div class="my-2">
          <p class="mb-1 text-gray-400 font-bold">كلمة المرور الجديدة</p>

          <input
            type="password"
            class="
              flex-1
              appearance-none
              border border-transparent
              w-full
              py-2
              px-4
              bg-gray-800
              text-gray-300 text-lg
              rounded
              focus:outline-none
              focus:ring-1
              focus:ring-red-500
              focus:border-transparent
            "
            placeholder="كلمة المرور الجديدة"
          />
        </div>
        <button
          class="
            bg-gray-800
            mb-12
            mt-12
            border border-red-500
            px-4
            hover:bg-red-500 hover:text-white
            text-red-500
            w-full
            py-2
            flex
            justify-center
            items-center
            font-bold
            rounded-lg
          "
        >
          <i class="fa fa-save"></i>
          <p class="mr-2">حفظ التعديلات</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'update-setting',
}
</script>

<style></style>
