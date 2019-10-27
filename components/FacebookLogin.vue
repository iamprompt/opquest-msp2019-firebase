<!-- prettier-ignore -->
<template>
  <button class="button--green" @click="FaceBook">Facebook Sign In</button>
</template>

<script>
import firebase, { auth } from '~/utils/firebase'

/* eslint-disable */
export default {
  methods: {
    async FaceBook() {
      const provider = new firebase.auth.FacebookAuthProvider()
      provider.addScope('email')
      provider.addScope('public_profile')
      try {
        await auth.signInWithRedirect(provider)
        console.log('Finished Facebook login')
        firebase
          .auth()
          .getRedirectResult()
          .then(function(result) {
            if (result.credential) {
              // This gives you a Facebook Access Token. You can use it to access the Facebook API.
              var token = result.credential.accessToken
              // ...
            }
            // The signed-in user info.
            var user = result.user
            console.log(user.photoURL)
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message
            // The email of the user's account used.
            var email = error.email
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential
            // ...
          })
        return location.reload()
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>
