<template>
  <Footer>
    <img src="~/assets/images/footer/SanctuaryClosed.svg" class="sanctuary" />
  </Footer>
</template>

<script>
import styled from 'vue-styled-components'

export const Footer = styled.div`
  position: fixed;
  bottom: -10px;
  z-index: -1;
`

export default {
  components: {
    Footer
  }
}
</script>

<style>
.sanctuary {
  opacity: 20%;
  width: 50vw;
}
</style>
