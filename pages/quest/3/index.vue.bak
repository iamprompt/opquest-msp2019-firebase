<template>
  <Container>
    <Logo w="100" />
    <StageHeader no="3" name="การพยากรณ์และการเนรมิต" />
    <QContainer>
      <QTitle>ภารกิจ</QTitle>
      <QText id="mission"></QText>
      <Btn text="ย้อนกลับ" @click.native="backtomenu()" />
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
import { Container, QContainer, QTitle, QText, ABox } from '~/assets/utils/comp'

const getMissionQ3 = firebase.functions().httpsCallable('getMissionQ3')
getMissionQ3().then(function(result) {
  const misson = result.data
  console.log(result.data);

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
    Btn
  },
  methods: {
    backtomenu() {
      window.location.href = 'https://mumspquest.web.app/quest/'
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
