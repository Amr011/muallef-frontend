<template>
  <div>
    <navbar-component :isAuth="isAuth" />
    <success-component />
    <login-component
      :email="userEmail"
      :password="userPassword"
      :authFunction="makeItAuthed"
    />
    <footer-component />
  </div>
</template>

<script>
import loginComponent from '../components/auth-component/login.vue'
import navbarComponent from '../components/navbar-component/navbar.vue'
import footerComponent from '../components/footer-component/footer.vue'
import successComponent from '../components/alert-component/success.vue'

export default {
  name: 'signup',
  components: {
    loginComponent,
    navbarComponent,
    footerComponent,
    successComponent,
  },

  data() {
    return {
      userEmail: '',
      userPassword: '',
      isAuth: false,
    }
  },
  methods: {
    makeItAuthed() {
      this.isAuth = !this.isAuth
    },
  },
}
</script>

<style></style>
