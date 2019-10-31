<template>
  <div>
    <StageArea>
      <Stage id="stage1" stage-name="สำนักที่ 1" file-name="Content"></Stage>
      <Stage id="stage2" stage-name="สำนักที่ 2" file-name="Music"></Stage>
    </StageArea>
    <StageArea>
      <Stage id="stage3" stage-name="สำนักที่ 3" file-name="Create"></Stage>
      <Stage id="stage4" stage-name="สำนักที่ 4" file-name="Code"></Stage>
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
