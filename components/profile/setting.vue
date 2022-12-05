<template>
  <div>
    <div class="px-6 py-4 font-bold text-2xl border-b border-gray-700">
      {{ title }}
    </div>
    <update-setting-component />
  </div>
</template>

<script>
import updateSettingComponent from './setting-component/update-setting.vue'

export default {
  props: ['title'],
  name: 'settings',
  components: {
    updateSettingComponent,
  },
}
</script>

<style></style>
