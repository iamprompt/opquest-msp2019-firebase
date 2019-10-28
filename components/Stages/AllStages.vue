<template>
  <div>
    <StageArea>
      <Stage stage-name="สำนักที่ 1" file-name="Code"></Stage>
      <Stage stage-name="สำนักที่ 2" file-name="Music"></Stage>
    </StageArea>
    <StageArea>
      <Stage stage-name="สำนักที่ 3" file-name="Create"></Stage>
      <Stage stage-name="สำนักที่ 4" file-name="Content"></Stage>
    </StageArea>
  </div>
</template>

<script>
import styled from 'vue-styled-components'
import Stage from './Stage'

export const StageArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default {
  components: {
    Stage,
    StageArea
  }
}
</script>
