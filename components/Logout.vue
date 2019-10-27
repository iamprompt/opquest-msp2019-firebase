<!-- prettier-ignore -->
<template>
  <button class="button--green" @click="FaceBook">Facebook Sign In</button>
</template>

<script>
import firebase from '~/utils/firebase'

/* eslint-disable */
export default {
  methods: {
    async FaceBook() {
      try {
        await firebase.auth().signOut()
        console.log('Finished Facebook login')
        return location.reload()
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>
