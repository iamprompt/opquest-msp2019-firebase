import styled from 'vue-styled-components'

const divProps = { pos: String }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  max-width: 100%;
`

export const QTitle = styled('div', divProps)`
  margin-top: 10px;
  text-align: ${(props) => props.pos};
  font-size: 20px;
  font-weight: bold;
`

export const QText = styled('div', divProps)`
  margin-top: 10px;
  text-align: ${(props) => props.pos};
  font-size: 16px;
  width: 75vw;
`

export const QContainer = styled.div`
  margin: 0px;
  padding: 0px 30px 0px 30px;
`

export const ABox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
`
