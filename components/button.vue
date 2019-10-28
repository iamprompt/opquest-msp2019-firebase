<template>
  <BTN :pos="pos">{{ text }}</BTN>
</template>

<script>
import styled from 'vue-styled-components'

const buttonProps = { pos: String }

export const BTN = styled('button', buttonProps)`
  float: ${(props) => props.pos};
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px 20px;
  background: linear-gradient(106.7deg, #f9d33b 7.34%, #ffbc5b 87.32%);
  border-radius: 60px;
  border: none;
  cursor: pointer;
`

export default {
  components: {
    BTN
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    pos: {
      type: String,
      default: ''
    }
  }
}
</script>
