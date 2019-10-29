<template>
  <MUICTOP>
    <img src="~/assets/images/footer/muictop2019logo.svg" class="muictop" />
    <p>Created by MU MSP</p>
  </MUICTOP>
</template>

<script>
import styled from 'vue-styled-components'

export const MUICTOP = styled.div`
  padding-top: 50px;
  bottom: 30px;
  padding-bottom: 20px;
`

export default {
  components: {
    MUICTOP
  }
}
</script>
