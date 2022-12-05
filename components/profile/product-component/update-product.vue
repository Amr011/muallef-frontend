<template>
  <div class="mx-4 my-6">
    <div class="mx-40">
      <div class="my-2">
        <div class="my-6">
          <p class="text-3xl text-red-500">تعديل المنتج</p>
        </div>
        <div>
          <p class="mb-1 text-gray-300 font-bold">اختيار قسم</p>
          <select
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
            aria-placeholder="ادخل السعر"
          >
            <option value="ذكاء اصطناعي"></option>
          </select>
          <i class="fa fa-caret-down -mr-6 mt-3.5 absolute text-red-500"></i>
        </div>
        <div class="grid grid-cols-2 gap-4 my-2">
          <div>
            <p class="mb-1 text-gray-300 font-bold">اختيار صنف رئيسي</p>

            <select
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
              aria-placeholder="ادخل السعر"
            >
              <option value="ذكاء اصطناعي"></option>
            </select>
            <i class="fa fa-caret-down -mr-6 mt-3.5 absolute text-red-500"></i>
          </div>
          <div>
            <p class="mb-1 text-gray-300 font-bold">اختيار صنف فرعي</p>
            <select
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
            >
              <option value="ذكاء اصطناعي"></option>
            </select>
            <i class="fa fa-caret-down -mr-6 mt-3.5 absolute text-red-500"></i>
          </div>
        </div>
        <div class="mb-1 text-gray-400 flex mr-1">
          <p>يجب ان يكون القسم والصنف متوافقين مع المحتوى مثال:</p>
          <p class="text-red-500 mr-1">برامج و تطبيقات - ويب - مدونات</p>
        </div>

        <p class="mb-1 text-gray-300 font-bold">اسم المنتج</p>
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
          placeholder="اسم المنتج"
        />
        <div class="my-1 flex text-gray-400 font-bold mr-1">
          <p>يجب ان يكون اسم المنتج فريد و من كلمة واحدة فقط مثال :</p>
          <p class="text-red-500 mr-1">وثّق - ابجد - اثاث</p>
        </div>

        <div class="my-2">
          <p class="mb-1 text-gray-300 font-bold">عنوان المنتج</p>
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
            placeholder="عنوان المنتج"
          />
          <div class="my-1 flex text-gray-400 font-bold mr-1">
            <p>يجب ان يكون عنوان بسيط مثال :</p>
            <p class="text-red-500 mr-1">
              مدونة وردبريس عربية - تطبيق لإدارة الطلبات
            </p>
          </div>
        </div>
        <div class="my-2">
          <p class="mb-1 text-gray-300 font-bold">محتوى المنتج</p>
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
            placeholder="محتوى المنتج"
          ></textarea>
          <div class="my-1 flex text-gray-400 font-bold mr-1">
            <p>يجب ان يكون وافي كل شيئ يتعلق بالمنتج الحد الأدنى</p>
            <p class="text-red-500 mr-1">200</p>
            <p class="text-red-500 mr-1">كلمة</p>
          </div>
        </div>
        <div class="my-2">
          <p class="mb-1 text-gray-300 font-bold">صورة المنتج الرئيسية</p>
          <input
            type="file"
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
            aria-label="رفع صورة المنتج"
          />
          <i class="fas fa-upload -mr-8 mt-3.5 absolute text-red-500"></i>
          <div class="my-1 flex text-gray-400 font-bold mr-1">
            <p>يجب ان تكون صورة المنتج فريدة و احترافية</p>
            <p class="text-red-500 mr-1">.png - .jpg - .jpeg</p>
          </div>
        </div>
        <div class="my-2">
          <p class="mb-1 text-gray-300 font-bold">ملفات المنتج</p>
          <input
            type="file"
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
            aria-label="رفع ملفات المنتج"
          />
          <i class="fas fa-upload -mr-8 mt-3.5 absolute text-red-500"></i>
          <div class="my-1 flex text-gray-400 font-bold mr-1">
            <p>يجب ان تكون ملفات المنتج مرتبة و منظمة</p>
            <p class="text-red-500 mr-1">.zip - .rar</p>
          </div>
        </div>
        <div class="my-2">
          <p class="mb-1 text-gray-300 font-bold">التسعير</p>
          <div
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
            "
          >
            <div class="grid grid-cols-2 gap-4 my-2">
              <div>
                <p class="mb-1 text-gray-400 font-bold">
                  سعر المنتج في الترخيص القياسي
                </p>

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
                  placeholder="ادخل السعر"
                />
                <i
                  class="
                    fas
                    fa-dollar-sign fa-lg
                    -mr-6
                    mt-3.5
                    absolute
                    text-red-500
                  "
                ></i>
                <div class="flex mr-2">
                  <p class="text-gray-300">صافي الأرباح :</p>
                  <p class="text-red-500 mr-5 font-sans text-xl">29$</p>
                </div>
              </div>
              <div>
                <p class="mb-1 text-gray-400 font-bold">
                  سعر المنتج في الترخيص الموسّع
                </p>
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
                  placeholder="ادخل السعر"
                />
                <i
                  class="
                    fas
                    fa-dollar-sign fa-lg
                    -mr-6
                    mt-3.5
                    absolute
                    text-red-500
                  "
                ></i>
                <div class="flex mr-2">
                  <p class="text-gray-300">صافي الأرباح :</p>
                  <p class="text-red-500 mr-5 font-sans text-xl">29$</p>
                </div>
              </div>
            </div>
            <div class="my-1 flex text-gray-400 font-bold mr-2">
              <p>يحتسب للموقع عمولة قدرها</p>
              <p class="text-red-500 mr-1 font-sans">8%</p>
              <p class="mr-1">من سعر المنتج الأصلي</p>
            </div>
            <div class="my-1 flex text-gray-400 font-bold mr-2">
              <p>للمزيد من المعلومات حول</p>
              <p class="text-red-500 mr-1">نظام التراخيص</p>
            </div>
          </div>
        </div>

        <div class="my-2">
          <p class="mb-1 text-gray-300 font-bold">اعدادات الدعم الفني</p>
          <div
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
            "
          >
            <div class="grid grid-cols-2 gap-4 my-2">
              <div>
                <p class="mb-1 text-gray-400 font-bold">المدة</p>

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
                  placeholder="ادخل المدة"
                />
                <i
                  class="fas fa-calendar -mr-6 mt-3.5 absolute text-red-500"
                ></i>
              </div>
              <div>
                <p class="mb-1 text-gray-400 font-bold">السعر</p>
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
                  placeholder="ادخل السعر"
                />
                <i
                  class="
                    fas
                    fa-dollar-sign fa-lg
                    -mr-6
                    mt-3.5
                    absolute
                    text-red-500
                  "
                ></i>
              </div>
            </div>

            <div class="my-1 flex text-gray-400 font-bold mr-2">
              <p>للمزيد من المعلومات حول</p>
              <p class="text-red-500 mr-1">الدعم الفني للمنتج</p>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-1 text-gray-300 font-bold">رابط المعاينة</p>
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
        placeholder="رابط لمعاينة المنتج"
      />
      <div class="flex text-gray-400">
        <p class="">مثال:</p>
        <p class="text-red-500 mr-2">https://muallef-frontend.herokuapp.com</p>
      </div>
      <div class="flex my-6">
        <label class="flex items-center">
          <input type="checkbox" class="form-checkbox text-pink-600" />
          <span class="mr-2"
            >اوافق على <span class="text-red-500">الخصوصية</span></span
          >
        </label>
      </div>
      <div class="mt-2">
        <button
          class="
            border border-red-500
            mt-2
            text-red-500
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
          <i class="fa fa-edit"></i>
          <p class="mr-2">تعديل المنتج</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'update-product',
}
</script>

<style></style>
