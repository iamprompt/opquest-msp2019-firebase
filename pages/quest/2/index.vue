<template>
  <Container>
    <Logo w="100" />
    <StageHeader no="2" name="ความบันเทิง" />
    <QContainer>
      <QTitle>ภารกิจ</QTitle>
      <QText id="mission"></QText>
      <CodeUnlock />
      <Btn text="ย้อนกลับ" pos="left" @click.native="backtomenu()" />
      <Btn text="ปลดล็อก" pos="right" @click.native="unlockcode()" />
    </QContainer>
    <MUICTOP />
    <MTNBlue />
  </Container>
</template>

<script>
/* eslint-disable */
import firebase from '~/plugins/firebase'
import Logo from '~/components/Logo'
import StageHeader from '~/components/Stages/StageHeader'
import Btn from '~/components/button'
import MUICTOP from '~/components/Footer/MUICTOP'
import MTNBlue from '~/components/Footer/MTNBlue'
import CodeUnlock from '~/components/Stages/CodeUnlock'
import { Container, QContainer, QTitle, QText, ABox } from '~/assets/utils/comp'
import requiredLogin from '~/mixins/requiredLogin'

const getMissionQ2 = firebase.functions().httpsCallable('getMissionQ2')
getMissionQ2().then(function(result) {
  const misson = result.data
  console.log(result.data)

  const qText = document.getElementById('mission')

  qText.textContent = result.data

  // console.log(result)
})

export default {
  components: {
    Container,
    Logo,
    QContainer,
    QTitle,
    QText,
    ABox,
    MUICTOP,
    StageHeader,
    MTNBlue,
    Btn,
    CodeUnlock
  },
  mixins: [requiredLogin],
  methods: {
    backtomenu() {
      window.location.href = 'https://mumspquest.web.app/quest/'
    },
    unlockcode() {
      const usercode = document.querySelector('input.codeunlockfield').value

      const UnlockCode = firebase.functions().httpsCallable('unlockcode')
      UnlockCode({ usercode: usercode, stage: "2" }).then(function(result) {
        const checked = result.data
        console.log(result.data)
        console.log(checked)
        if (checked === true) {
          window.location.href = 'https://mumspquest.web.app/quest/'
        }
      })
    }
  },
  head() {
    return {
      title: 'Mahidol MSP Open House 2019 Quest',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'MSP Open House Activity for MUICT Open House 2019'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style/dark';

.radio {
  position: relative;
  cursor: pointer;
  line-height: 20px;
  font-size: 14px;
  margin: 15px;

  .label {
    position: relative;
    display: block;
    float: left;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border: 2px solid $gray;
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;

    &:after {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background: $primary;
      transform: scale(0);
      transition: all 0.2s ease;
      opacity: 0.08;
      pointer-events: none;
    }
  }

  &:hover {
    .label:after {
      transform: scale(3.6);
    }
  }
}

input[type='radio']:checked + .label {
  border-color: $primary;

  &:after {
    transform: scale(1);
    transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
    opacity: 1;
  }
}

span.Label {
  float: left;
  margin-left: 10px;
}

.hidden {
  display: none;
}

.submitbtn {
  float: right;
  font-size: 14px;
  margin-top: 20px;
  padding: 10px 20px;
  background: $h-yellowgradient;
  border-radius: 60px;
  border: none;
  font-weight: bold;
}

.mountainblue {
  opacity: 50%;
}

/* The Modal (background) */
.modalcorrect {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modalwrong {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: white;
  margin: 10% auto; /* 15% from the top and centered */
  padding: 20px;
  width: 70%; /* Could be more or less, depending on screen size */
  border-radius: 15px;
}
</style>
