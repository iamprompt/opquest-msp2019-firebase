<template>
  <Container>
    <Logo w="100" />
    <StageHeader no="1" name="การเรียนรู้" />
    <QContainer>
      <QTitle pos="left">คำถาม</QTitle>
      <QText id="question"></QText>
      <QTitle pos="left">คำตอบ</QTitle>

      <ABox>
        <label for="AChoice" class="radio">
          <input
            id="AChoice"
            type="radio"
            name="Choice"
            class="hidden choice"
            value="a"
          />
          <span class="label"></span>
          <span id="AChoice" class="Label"></span>
        </label>

        <label for="BChoice" class="radio">
          <input
            id="BChoice"
            type="radio"
            name="Choice"
            class="hidden choice"
            value="b"
          />
          <span class="label"></span>
          <span id="BChoice" class="Label"></span>
        </label>

        <label for="CChoice" class="radio">
          <input
            id="CChoice"
            type="radio"
            name="Choice"
            class="hidden choice"
            value="c"
          />
          <span class="label"></span>
          <span id="CChoice" class="Label"></span>
        </label>

        <label for="DChoice" class="radio">
          <input
            id="DChoice"
            type="radio"
            name="Choice"
            class="hidden choice"
            value="d"
          />
          <span class="label"></span>
          <span id="DChoice" class="Label"></span>
        </label>
      </ABox>
      <!-- Correct Modal -->
      <div id="CorrectBox" class="modalcorrect">
        <div class="modal-content">
          <NStar file-name="starcorrect" />
          <CTitle>ยินดีด้วย!!</CTitle>
          <Subtitle>น้องผ่านภารกิจแล้ว</Subtitle>
          <Btn text="กลับสู่หน้าหลัก" @click.native="backtomenu()" />
        </div>
      </div>
      <!-- Wrong Modal -->
      <div id="WrongBox" class="modalwrong">
        <div class="modal-content">
          <NStar file-name="starwrong" />
          <WTitle>คำตอบผิด!!</WTitle>
          <Subtitle>ไม่เป็นไรนะ พยายามหาเข้า</Subtitle>
          <Btn text="ตอบอีกครั้ง" @click.native="tryagain()" />
        </div>
      </div>
      <Btn text="ย้อนกลับ" pos="left" @click.native="backtomenu()" />
      <Btn text="ส่งคำตอบ" pos="right" @click.native="submitans()" />
    </QContainer>
    <MUICTOP />
    <MTNBlue />
  </Container>
</template>

<script>
import styled from 'vue-styled-components'
import firebase from '~/plugins/firebase'
import Logo from '~/components/Logo'
import StageHeader from '~/components/Stages/StageHeader'
import Btn from '~/components/button'
import MUICTOP from '~/components/Footer/MUICTOP'
import MTNBlue from '~/components/Footer/MTNBlue'
import NStar from '~/components/Stages/NStar'
import { Container, QContainer, QTitle, QText, ABox } from '~/assets/utils/comp'
import requiredLogin from '~/mixins/requiredLogin'

export const CTitle = styled.div`
  margin-top: 20px;
  color: #a5ce00;
  font-weight: bold;
  font-size: 48px;
`

export const WTitle = styled.div`
  margin-top: 20px;
  color: #d6493e;
  font-weight: bold;
  font-size: 48px;
`

export const Subtitle = styled.div`
  font-size: 24px;
  color: Black;
`

const getQuestion = firebase.functions().httpsCallable('Q1question')
getQuestion().then(function(result) {
  const question = result.data.question
  const choiceA = result.data.choiceA
  const choiceB = result.data.choiceB
  const choiceC = result.data.choiceC
  const choiceD = result.data.choiceD

  const qText = document.getElementById('question')
  const AChoice = document.querySelector('span#AChoice')
  const BChoice = document.querySelector('span#BChoice')
  const CChoice = document.querySelector('span#CChoice')
  const DChoice = document.querySelector('span#DChoice')

  qText.textContent = question
  AChoice.textContent = choiceA
  BChoice.textContent = choiceB
  CChoice.textContent = choiceC
  DChoice.textContent = choiceD

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
    CTitle,
    WTitle,
    Subtitle,
    NStar
  },
  mixins: [requiredLogin],
  methods: {
    submitans() {
      let inputans
      const radio = document.querySelectorAll('.choice')

      for (let i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
          inputans = radio[i].value
          // console.log('selected choice ', inputans);
          break
        }
      }

      const Q1check = firebase.functions().httpsCallable('Q1check')
      Q1check({ userans: inputans }).then(function(result) {
        // console.log(result.data)
        const res = result.data
        const correctmodal = document.getElementById('CorrectBox')
        const wrongmodal = document.getElementById('WrongBox')
        if (res === true) {
          correctmodal.style.display = 'block'
        } else if (res === false) {
          wrongmodal.style.display = 'block'
        }
      })
    },
    backtomenu() {
      window.location.href = 'https://mumspquest.web.app/quest/'
    },
    tryagain() {
      const wrongmodal = document.getElementById('WrongBox')
      wrongmodal.style.display = 'none'
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
