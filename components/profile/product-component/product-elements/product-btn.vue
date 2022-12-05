<template>
  <div>
    <nuxt-link
      class="
        border border-red-500
        bg-gray-800
        text-red-500
        font-bold
        rounded
        text-center
        py-2
        px-8
      "
      to="/"
    >
      {{ btnTitle }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'product-btn',
  props: ['btnTitle', 'btnTo'],
}
</script>

<style></style>
