<template>
  <Footer>
    <img src="~/assets/images/footer/mountainbg.svg" class="mountainblue" />
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
