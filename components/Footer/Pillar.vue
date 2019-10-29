<template>
  <div>
    <FooterL>
      <img src="~/assets/images/footer/Pillar1.png" class="pillar" />
    </FooterL>
    <FooterR>
      <img src="~/assets/images/footer/Pillar2.png" class="pillar" />
    </FooterR>
  </div>
</template>

<script>
import styled from 'vue-styled-components'

export const FooterL = styled.div`
  position: fixed;
  left: 0px;
  bottom: -10px;
  z-index: -1;
`

export const FooterR = styled.div`
  position: fixed;
  right: 0px;
  bottom: -10px;
  z-index: -1;
`

export default {
  components: {
    FooterL,
    FooterR
  }
}
</script>
