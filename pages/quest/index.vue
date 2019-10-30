<template>
  <Container>
    <Logo w="150" />
    <Title>ยินดีต้อนรับ</Title>
    <Subtitle id="name"></Subtitle>
    <AllStageBox></AllStageBox>
    <FBLogout />
    <Viharn />
  </Container>
</template>

<script>
/* eslint-disable */
import styled from 'vue-styled-components'
import firebase from '~/plugins/firebase'
import Logo from '~/components/Logo'
import FBLogout from '~/components/FBLogout'
import { Container } from '~/assets/utils/comp'
import Viharn from '~/components/Footer/Viharn'
import AllStageBox from '~/components/Stages/AllStages'
import requiredLogin from '~/mixins/requiredLogin'

export const Title = styled.div`
  font-size: 24px;
  font-weight: Bold;
`

export const Subtitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`

const questStatus = firebase.functions().httpsCallable('questStatus')
questStatus().then(function(result) {
  const name = result.data.name
  const Q1status = result.data.Q1status
  const Q2status = result.data.Q2status
  const Q3status = result.data.Q3status
  const Q4status = result.data.Q4status
  const nameBox = document.getElementById('name')
  nameBox.textContent = name
  console.log(result, '+', name, '+', Q1status, '+', Q2status, '+', Q3status, '+', Q4status)
})

export default {
  components: {
    Container,
    Logo,
    Title,
    Subtitle,
    AllStageBox,
    Viharn,
    FBLogout
  },
  mixins: [requiredLogin]
}
</script>

<style lang="scss">
@import '~/assets/style/light';

.viharn {
  width: 100vw;
}
</style>
