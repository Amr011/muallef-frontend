<template>
  <div>
    <div class="px-6 py-4 font-bold text-2xl border-b border-gray-700">
      {{ title }}
    </div>
    <review-client-component v-for="review in reviews" :key="review" />
  </div>
</template>

<script>
import reviewClientComponent from './review-component/review-client.vue'
export default {
  props: ['title'],
  name: 'review',
  components: { reviewClientComponent },
  data() {
    return {
      reviews: [12, 3, 4, 5, 6],
    }
  },
}
</script>

<style></style>
