<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">Login</h1>
      <h2 class="subtitle">
        MSP Open House Activity for MUICT Open House 2019
      </h2>
      <facebook-login></facebook-login>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import FacebookLogin from '~/components/FacebookLogin.vue'
import Logo from '~/components/Logo.vue'
import requiredLogout from '~/mixins/requiredLogout'

export default {
  components: {
    Logo,
    FacebookLogin
  },
  mixins: [requiredLogout]
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
