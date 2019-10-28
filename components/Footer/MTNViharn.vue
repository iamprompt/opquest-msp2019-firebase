<template>
  <Footer>
    <img
      src="~/assets/images/footer/mountain_viharn.svg"
      class="mountainviharn"
    />
  </Footer>
</template>

<script>
import styled from 'vue-styled-components'

export const Footer = styled.div`
  position: fixed;
  bottom: -50px;
  z-index: -1;
`

export default {
  components: {
    Footer
  }
}
</script>

<style></style>
