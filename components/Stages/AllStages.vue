<template>
  <div>
    <StageArea>
      <Stage
        stage-name="สำนักที่ 1"
        file-name="Code"
        @click.native="stage1()"
      ></Stage>
      <Stage
        stage-name="สำนักที่ 2"
        file-name="Music"
        @click.native="stage2()"
      ></Stage>
    </StageArea>
    <StageArea>
      <Stage
        stage-name="สำนักที่ 3"
        file-name="Create"
        @click.native="stage3()"
      ></Stage>
      <Stage
        stage-name="สำนักที่ 4"
        file-name="Content"
        @click.native="stage4()"
      ></Stage>
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
  },
  methods: {
    stage1() {
      this.$router.push({
        path: '/quest/1'
      })
    },
    stage2() {
      this.$router.push({
        path: '/quest/1'
      })
    },
    stage3() {
      this.$router.push({
        path: '/quest/1'
      })
    },
    stage4() {
      this.$router.push({
        path: '/quest/1'
      })
    }
  }
}
</script>
