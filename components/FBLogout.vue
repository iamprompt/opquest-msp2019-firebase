<!-- prettier-ignore -->
<template>
  <LoginBtn class="logoutbtn" @click="FBlogin">
    Logout
  </LoginBtn>
</template>

<script>
import styled from 'vue-styled-components'
import { fireAuth } from '@/plugins/firebase'

export const LoginBtn = styled.button`
  position: block;
  margin-top: 20px
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
      try {
        await fireAuth.signOut()
        console.log('Finished Facebook logout!!')

        return location.reload()
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>
