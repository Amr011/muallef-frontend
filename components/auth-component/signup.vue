<template>
  <div>
    <div
      class="
        w-full
        xl:w-8/12
        lg:w-8/12
        h-2/4
        bg-gray-900
        mx-auto
        my-10
        rounded-lg
        flex
        justify-center
        items-center
      "
    >
      <div class="text-gray-300">
        <h1 class="text-3xl my-8">انشاء حساب مستخدم جديد</h1>
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
                v-model="firstname"
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
                v-model="lastname"
              />
            </div>
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
              v-model="email"
            />
          </div>
          <div class="my-2">
            <p class="mb-1 text-gray-400 font-bold">كلمة المرور</p>

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
              placeholder="كلمة المرور"
              v-model="password"
            />
          </div>
        </div>
        <div class="flex mb-3">
          <label class="flex items-center">
            <input
              type="checkbox"
              class="form-checkbox h-4 w-4 text-pink-600"
            />
            <span class="mr-2"
              >اوافق على <span class="text-red-500">الخصوصية</span></span
            >
          </label>
        </div>

        <div class="mb-4">
          <div
            class="
              border border-red-500
              bg-gray-800
              text-red-500
              font-bold
              rounded
              w-2/5
              text-center
              px-4
              py-2
            "
          >
            <button>تسجيل الدخول</button>
          </div>
        </div>
        <div class="text-red-500 mb-10 hover:underline">
          <p><router-link to="/login">لديك حساب بالفعل ؟</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signup-component',
  data() {
    return {}
  },
  props: {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
}
</script>

<style></style>
