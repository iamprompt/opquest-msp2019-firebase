<template>
  <ABox>
    <QTitle>ปลดล็อกภารกิจ</QTitle>
    <QText>
      หลังจากน้อง ๆ เหล่าผู้กล้าได้ทำภารกิจเสร็จสิ้น
      ให้พี่ประจำสำนักใส่โค้ดปลดล็อกเสร็จสิ้นภารกิจ
    </QText>
    <input class="codeunlockfield" name="codeunlock" type="text" />
  </ABox>
</template>

<script>
import { ABox, QTitle, QText } from '~/assets/utils/comp'

export default {
  components: {
    ABox,
    QTitle,
    QText
  }
}
</script>

<style lang="scss">
.codeunlockfield {
  font-size: 18px;
  padding: 10px;
  margin: 10px auto;
  color: black;
  background: #ffffff;
  border: none;
  border-radius: 10px;
  width: 60%;
}
</style>
