<template>
  <div>
    <navbar-component />
    <footer-component />
  </div>
</template>

<script>
import footerComponent from '~/components/footer-component/footer.vue'
import navbarComponent from '~/components/navbar-component/navbar.vue'
export default {
  components: { navbarComponent, footerComponent },
}
</script>

<style></style>
