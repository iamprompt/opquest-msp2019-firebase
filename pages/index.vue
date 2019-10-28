<template>
  <Container>
    <Logo w="200" />
    <div class="cloud1">
      <img src="~/assets/images/cloud1.svg" />
    </div>
    <div class="cloud2">
      <img src="~/assets/images/cloud2.svg" />
    </div>
    <FBLogin />
    <Viharn />
  </Container>
</template>

<script>
import Logo from '~/components/Logo'
import Viharn from '~/components/Footer/MTNViharn'
import { Container } from '~/assets/utils/comp'
import FBLogin from '~/components/FBLogin'
import requiredLogout from '~/mixins/requiredLogout'

export default {
  components: {
    Container,
    Logo,
    Viharn,
    FBLogin
  },
  mixins: [requiredLogout]
}
</script>

<style lang="scss">
@import '~/assets/style/light';

.cloud1 {
  position: fixed;
  bottom: 150px;
  z-index: 1;
  right: -50px;
}

.cloud2 {
  position: fixed;
  bottom: 300px;
  z-index: -2;
  left: -80px;
}
</style>
