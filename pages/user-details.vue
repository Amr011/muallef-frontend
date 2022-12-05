<template>
  <div>
    <navbar-component />

    <div class="container mx-auto">
      <div class="container mx-auto">
        <breadcrumb-component />
      </div>
    </div>
    <div class="container mx-auto mt-4 mb-10">
      <user-details-component />
    </div>
    <footer-component />
  </div>
</template>

<script>
import navbarComponent from '~/components/navbar-component/navbar.vue'
import footerComponent from '~/components/footer-component/footer.vue'
import breadcrumbComponent from '../components/breadcrumb-component/breadcrumb.vue'
import userDetailsComponent from '../components/user-component/user-details.vue'

export default {
  name: 'user-details',
  components: {
    navbarComponent,
    footerComponent,
    breadcrumbComponent,
    userDetailsComponent,
  },
}
</script>

<style></style>
