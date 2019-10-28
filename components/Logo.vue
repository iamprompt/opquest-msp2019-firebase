<template>
  <LogoContainer :w="w + 'px'">
    <img src="~/assets/images/logo.svg" style="width: 100%;" />
  </LogoContainer>
</template>

<script>
import styled from 'vue-styled-components'

const divProps = { w: String }

export const LogoContainer = styled('div', divProps)`
  margin-top: 10px;
  width: ${(props) => props.w};
`

export default {
  components: {
    LogoContainer
  },
  props: {
    w: {
      type: String,
      default: ''
    }
  }
}
</script>
