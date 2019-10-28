<template>
  <div>
    <StageNo>สำนักที่ {{ no }}</StageNo>
    <StageName>สำนักแห่ง{{ name }}</StageName>
  </div>
</template>

<script>
import styled from 'vue-styled-components'

export const StageName = styled.div`
  font-size: 32px;
  font-weight: Bold;
  margin-bottom: 10px;
`

export const StageNo = styled.div`
  font-size: 18px;
`

export default {
  components: {
    StageName,
    StageNo
  },
  props: {
    no: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
