<template>
  <NStar>
    <img :src="require(`~/assets/images/nstar/${fileName}.png`)" class="star" />
  </NStar>
</template>

<script>
import styled from 'vue-styled-components'

export const NStar = styled.div`
  margin-top: 10px;
`

export default {
  components: {
    NStar
  },
  props: {
    fileName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.star {
  height: 150px;
}
</style>
