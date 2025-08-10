import styled from "styled-components"
import { Flex } from "../UI Library/Components/Layout/Flex"
import { largeSize, mediumSize, smallSize } from "../constants/iconsSizes"
import { containerSpacing, paddingRightZero } from "./composeStyled"

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #222224;
`

export const AppsContainer = styled(Flex)`
  box-sizing: border-box;
  background: #222224;
  ${containerSpacing}
  ${paddingRightZero}
`

export const PageContainer = styled(AppsContainer).attrs({
  alignItems: "flex-start",
  justifyContent: "center",
  flexBasis: "calc(100% - 80px)",
  className: "position-relative"
})`
  overflow: auto;
  height: 100%;
  background: #2b2b2d;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px 0 0 20px;
`

export const Icons = styled(Flex).attrs({ alignItems: "center", justifyContent: "center" }) <{ size: any }>`
  background: #222224;
  border-radius: 16px;
  height: ${({ size }: any) => (size == "s" ? smallSize : size == "m" ? mediumSize : largeSize)}px;
  width: ${({ size }: any) => (size == "s" ? smallSize : size == "m" ? mediumSize : largeSize)}px;
  color: #f4f4f6;
`
