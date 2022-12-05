<template>
  <div
    class="
      flex flex-col
      space-y-4
      bg-opacity-50
      min-w-screen
      h-screen
      animated
      fadeIn
      faster
      fixed
      left-0
      top-0
      justify-center
      items-center
      inset-0
      z-50
      outline-none
      focus:outline-none
      bg-gray-900
    "
    :class="{ hidden: showError }"
  >
    <div
      class="
        flex flex-col
        p-8
        bg-gray-800
        shadow-md
        hover:shodow-lg
        rounded-2xl
      "
    >
      <div class="flex items-center">
        <div class="flex flex-col ml-3">
          <div class="font-medium text-xl leading-none text-gray-100">
            رسالة خطأ
          </div>
          <p class="text-lg text-gray-400 leading-none mt-2">
            {{ theErrorMessage }}
          </p>
        </div>
      </div>
      <button
        class="text-red-500 absolute -mt-5 -mr-4"
        @click="showError = !showError"
      >
        <i class="fa fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'validate-component',
  props: ['theErrorMessage', 'showError'],
  data() {
    return {}
  },
}
</script>

<style></style>
