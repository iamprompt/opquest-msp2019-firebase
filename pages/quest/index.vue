<template>
  <Container>
    <Logo w="150" />
    <Title>ยินดีต้อนรับ</Title>
    <Subtitle>ชื่อเล่น</Subtitle>
    <AllStageBox></AllStageBox>
    <FBLogout />
    <Viharn />
  </Container>
</template>

<script>
import styled from 'vue-styled-components'
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
