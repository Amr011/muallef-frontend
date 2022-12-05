<template>
  <div class="text-xl text-gray-200">
    <portfolio-item-overview-user-details
      v-for="item in portfolioItmes"
      :key="item"
    />
    <div
      class="flex justify-center items-center"
      v-if="portfolioItmes.length == 0"
    >
      لم يضف المؤلف اي عمل حتى الأن
    </div>
  </div>
</template>

<script>
import portfolioItemOverviewUserDetails from './portfolio-item/portfolio-item.vue'
export default {
  name: 'portfolioOverviewUserDetails',
  components: {
    portfolioItemOverviewUserDetails,
  },
  props: {
    portfolioItmes: {
      type: Array,
    },
  },
}
</script>

<style></style>
