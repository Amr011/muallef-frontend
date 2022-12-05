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
      <div class="text-gray-300 w-9/12 lg:w-6/12 xl:w-6/12 mx-auto">
        <h1 class="text-3xl my-8">تسجيل الدخول</h1>
        <div class="pb-4">
          <div class="py-2">
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
              v-model="email"
              placeholder="عنوان البريد الإلكتروني"
            />
          </div>
          <p class="mb-1 text-gray-400 font-bold">كلمة المرور</p>

          <div class="">
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
              v-model="password"
              placeholder="كلمة المرور"
            />
          </div>
        </div>
        <div class="flex mb-6">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox text-pink-600" />
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
              w-4/12
              text-center
              py-2
            "
          >
            <button type="submit" @click="authFunction">تسجيل الدخول</button>
          </div>
        </div>
        <div class="text-red-500 mb-10 hover:underline">
          <p><router-link to="/signup">ليس لديك حساب ؟</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-component',
  props: {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    authFunction: {
      type: Function,
    },
  },
}
</script>

<style></style>
