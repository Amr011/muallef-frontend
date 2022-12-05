<template>
  <div>
    <navbar-component />
    <signup-component
      :firstname="userFirstname"
      :lastname="userLastname"
      :email="userEmail"
      :password="userPassword"
    />
    <footer-component />
  </div>
</template>

<script>
import navbarComponent from '../components/navbar-component/navbar.vue'
import footerComponent from '../components/footer-component/footer.vue'

import signupComponent from '../components/auth-component/signup.vue'
// import * as axios from 'axios'
export default {
  name: 'login',
  components: {
    signupComponent,
    navbarComponent,
    footerComponent,
  },
  data() {
    return {
      userFirstname: '',
      userLastname: '',
      userEmail: '',
      userPassword: '',
    }
  },
  methods: {
    async registerUser() {},
  },
}
</script>

<style></style>
