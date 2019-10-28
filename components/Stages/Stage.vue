<template>
  <StageBox>
    <img
      :src="require(`~/assets/images/stages/${fileName}.svg`)"
      class="Stageimg"
    />
    <StageDetail>{{ stageName }}</StageDetail>
  </StageBox>
</template>

<script>
import styled from 'vue-styled-components'

export const StageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffd175;
  width: 120px;
  height: 120px;
  margin: 10px;
  padding: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`

export const StageDetail = styled.div`
  font-size: 16pt;
  font-weight: bold;
  color: black;
  padding-top: 10px;
`

export default {
  components: { StageBox, StageDetail },
  props: {
    stageName: {
      type: String,
      default: ''
    },
    fileName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.Stageimg {
  height: 50px;
}
</style>
