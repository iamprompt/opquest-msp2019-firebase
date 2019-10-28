<template>
  <Container>
    <Logo w="100" />
    <StageHeader no="1" name="การเรียนรู้" />
    <NStar file-name="starcorrect" />
    <Title>ยินดีด้วย!!</Title>
    <Subtitle>น้องผ่านภารกิจแล้ว</Subtitle>
    <Btn text="กลับสู่หน้าหลัก" @click.native="backtoallstage()" />
    <MUICTOP />
    <Pillar />
  </Container>
</template>

<script>
import styled from 'vue-styled-components'
import Logo from '~/components/Logo'
import StageHeader from '~/components/Stages/StageHeader'
import NStar from '~/components/Stages/NStar'
import Btn from '~/components/button'
import MUICTOP from '~/components/Footer/MUICTOP'
import Pillar from '~/components/Footer/Pillar'
import { Container } from '~/assets/utils/comp'

export const Title = styled.div`
  margin-top: 20px;
  color: #a5ce00;
  font-weight: bold;
  font-size: 48px;
`

export const Subtitle = styled.div`
  font-size: 24px;
`

export default {
  components: {
    Container,
    Logo,
    MUICTOP,
    NStar,
    Title,
    Subtitle,
    Pillar,
    Btn,
    StageHeader
  },
  methods: {
    backtoallstage() {
      this.$router.push({
        path: '/quest/'
      })
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style/dark';
</style>
