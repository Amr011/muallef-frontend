<template>
  <div>
    <div class="px-6 py-4 font-bold text-2xl border-b border-gray-700">
      {{ title }}
    </div>
    <balance-read-component />
  </div>
</template>

<script>
import balanceReadComponent from './balance-component/balance-read.vue'
export default {
  props: ['title'],
  name: 'balance',
  components: { balanceReadComponent },
}
</script>

<style></style>
