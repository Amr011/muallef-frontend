<template>
  <div>
    <review-client-overview-user-details />
    <review-client-overview-user-details />
    <review-client-overview-user-details />
  </div>
</template>

<script>
import reviewClientOverviewUserDetails from './review-client/review-client.vue'
export default {
  name: 'reviewOverviewUserDetails',
  components: { reviewClientOverviewUserDetails },
}
</script>

<style></style>
