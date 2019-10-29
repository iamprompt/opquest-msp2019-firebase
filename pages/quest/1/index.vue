<template>
  <Container>
    <Logo w="100" />
    <StageHeader no="1" name="การเรียนรู้" />
    <QContainer>
      <QTitle pos="left">คำถาม</QTitle>
      <QText id="question">Bacon 123</QText>
      <QTitle pos="left">คำตอบ</QTitle>

      <ABox>
        <label for="AChoice" class="radio">
          <input
            id="AChoice"
            type="radio"
            name="Choice"
            class="hidden choice"
            value="A"
          />
          <span class="label"></span>
          <span class="Label">Adobe</span>
        </label>

        <label for="BChoice" class="radio">
          <input
            id="BChoice"
            type="radio"
            name="Choice"
            class="hidden choice"
            value="B"
          />
          <span class="label"></span>
          <span class="Label">Figma</span>
        </label>

        <label for="CChoice" class="radio">
          <input
            id="CChoice"
            type="radio"
            name="Choice"
            class="hidden choice"
            value="C"
          />
          <span class="label"></span>
          <span class="Label">InVision</span>
        </label>

        <label for="DChoice" class="radio">
          <input
            id="DChoice"
            type="radio"
            name="Choice"
            class="hidden choice"
            value="D"
          />
          <span class="label"></span>
          <span class="Label">Sketch</span>
        </label>
      </ABox>
      <Btn text="ย้อนกลับ" pos="left" />
      <Btn text="ส่งคำตอบ" pos="right" @click.native="submitans()" />
    </QContainer>
    <MUICTOP />
    <MTNBlue />
  </Container>
</template>

<script>
/* eslint-disable */
import Logo from '~/components/Logo'
import StageHeader from '~/components/Stages/StageHeader'
import Btn from '~/components/button'
import MUICTOP from '~/components/Footer/MUICTOP'
import MTNBlue from '~/components/Footer/MTNBlue'
import { Container, QContainer, QTitle, QText, ABox } from '~/assets/utils/comp'

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
    submitans() {
      let inputans
      let radio = document.querySelectorAll(".choice")
      // console.log(radio)
      const answer = 'A'

      for (let i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
          inputans = radio[i].value
          break
        }
      }

      if (inputans === answer) {
        console.log('Correct')
        this.$router.push({
          path: '/quest/1/correct'
        })
      } else {
        console.log('Wrong')
        /* this.$router.push({
          path: '/quest/1/wrong'
        }) */
      }
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
</style>
