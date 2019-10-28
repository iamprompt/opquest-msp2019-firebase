<template>
  <FooterViharn>
    <img src="~/assets/images/footer/viharn.svg" class="viharn" />
  </FooterViharn>
</template>

<script>
import styled from 'vue-styled-components'

export const FooterViharn = styled.div`
  position: fixed;
  bottom: -10px;
  margin: 0px 0px;
  z-index: -1;
`

export default {
  components: {
    FooterViharn
  }
}
</script>
