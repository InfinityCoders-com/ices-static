import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  overflow: hidden;
  background: #222224;
  width: 100vw;
`

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const Input = styled.input`
  width: 100%;
  color: #f4f4f6;
  background: #2B2B2D;
  outline: none;
  box-sizing: border-box;
  &:active, &:focus, &:autofill, &:-webkit-autofill, &:-internal-autofill-selected {
    border: none;
    outline: none;
    background: #2B2B2D !important;
  }
`