<!-- prettier-ignore -->
<template>
  <Btn class="prizebtn">รับรางวัล</Btn>
</template>

<script>
import styled from 'vue-styled-components'

export const Btn = styled.button`
  position: block;
  background: linear-gradient(106.7deg, #F9D33B 7.34%, #FFBC5B 87.32%);
  margin-top: 20px
  bottom: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  padding: 5px 25px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`

/* eslint-disable */
export default {
  components: {
    Btn
  }
}
</script>
