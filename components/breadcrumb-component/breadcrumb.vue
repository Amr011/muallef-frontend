<template>
  <div>
    <ul class="list-reset pb-2 text-gray-200 text-lg rounded flex mb-2">
      <li class="pl-2">
        <router-link to="">الرئيسية</router-link>
      </li>
      <li>/</li>
      <li class="px-2">
        <router-link to="">مدونات</router-link>
      </li>
      <li>/</li>
      <li class="px-2">
        <router-link to="">وردبريس</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb-component',
}
</script>

<style></style>
