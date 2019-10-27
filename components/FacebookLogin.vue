<!-- prettier-ignore -->
<template>
  <button class="button--green" @click="FaceBook">Facebook Sign In</button>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      formEmail: '',
      formPassword: ''
    }
  },
  methods: {
    FaceBook() {
      this.$store
        .dispatch('signInWithFacebook')
        .then(() => {
          console.log('inside then statement on login')
        })
        .catch((e) => {
          console.log(e.message)
        })
    }
  }
}
</script>
