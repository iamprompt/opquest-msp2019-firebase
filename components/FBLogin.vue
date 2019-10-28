<!-- prettier-ignore -->
<template>
  <LoginBtn @click="FBlogin">
    Login with
    <span>
      <img src="~/assets/images/icons/facebook.svg" style="height: 20px;" />
    </span>
  </LoginBtn>
</template>

<script>
import styled from 'vue-styled-components'
import firebase, { fireAuth } from '@/plugins/firebase'

export const LoginBtn = styled.button`
  position: fixed;
  bottom: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  padding: 10px 25px;
  font-family: 'CaesarDressing', sans-serif;
  font-size: 24px;
  border: none;
  cursor: pointer;
`

/* eslint-disable */
export default {
  components: {
    LoginBtn
  },
  methods: {
    async FBlogin() {
      const provider = new firebase.auth.FacebookAuthProvider()
      provider.addScope('email')
      provider.addScope('public_profile')
      try {
        await fireAuth.signInWithRedirect(provider)
        console.log('Finished Facebook login')

        return location.reload()
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>
