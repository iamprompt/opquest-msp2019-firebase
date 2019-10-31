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
import PrizeBTN from '~/components/PrizeBTN'
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
  /* console.log(
    result,
    '+',
    name,
    '+',
    Q1status,
    '+',
    Q2status,
    '+',
    Q3status,
    '+',
    Q4status
  ) */

  const Q1Box = document.getElementById('stage1')
  const Q2Box = document.getElementById('stage2')
  const Q3Box = document.getElementById('stage3')
  const Q4Box = document.getElementById('stage4')
  const LogoutBTN = document.querySelector(".logoutbtn")

  if (Q1status != false) {
    Q1Box.style.opacity = '50%'
    Q1Box.style.cursor = 'not-allowed'
    Q1Box.style.visibility = 'visible'
    document.querySelectorAll('.star')[0].style.display = 'block'
  } else {
    Q1Box.addEventListener('click', function() {
      window.location.href = 'https://mumspquest.web.app/quest/1'
    })
  }
  if (Q2status != false) {
    Q2Box.style.opacity = '50%'
    Q2Box.style.cursor = 'not-allowed'
    Q2Box.style.visibility = 'visible'
    document.querySelectorAll('.star')[1].style.display = 'block'
  } else {
    Q2Box.addEventListener('click', function() {
      window.location.href = 'https://mumspquest.web.app/quest/2'
    })
  }
  if (Q3status != false) {
    Q3Box.style.opacity = '50%'
    Q3Box.style.cursor = 'not-allowed'
    Q3Box.style.visibility = 'visible'
    document.querySelectorAll('.star')[2].style.display = 'block'
  } else {
    Q3Box.addEventListener('click', function() {
      window.location.href = 'https://mumspquest.web.app/quest/3'
    })
  }
  if (Q4status != false) {
    Q4Box.style.opacity = '50%'
    Q4Box.style.cursor = 'not-allowed'
    Q4Box.style.visibility = 'visible'
    document.querySelectorAll('.star')[3].style.display = 'block'
  } else {
    Q4Box.addEventListener('click', function() {
      window.location.href = 'https://mumspquest.web.app/quest/4'
    })
  }

  if (
    Q1status === true &&
    Q2status === true &&
    Q3status === true &&
    Q4status === true
  ) {
    LogoutBTN.style.display = 'block'
  }
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
  mixins: [requiredLogin],
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
}
</script>

<style lang="scss">
@import '~/assets/style/light';

.viharn {
  width: 100vw;
}

.logoutbtn {
  display: none;
}
</style>
