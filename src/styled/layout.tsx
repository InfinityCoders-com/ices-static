import styled from "styled-components"
import { Flex } from "../UI Library/Components/Layout/Flex"
import { gap, largeSize, mediumSize, smallSize } from "../constants/iconsSizes"

export const AppsContainer = styled(Flex).attrs({
  alignItems: "flex-start",
  justifyContent: "center",
  flexBasis: "calc(100% - 80px)",
  className: "position-relative"
})`
  overflow: auto;
  padding: 20px;
  background: #2b2b2d;
  height: calc(100% - 20px);
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px 0 0 20px;
`

export const Icons = styled(Flex).attrs({ alignItems: "center", justifyContent: "center" })<{ size: any }>`
  background: #222224;
  border-radius: 16px;
  height: ${({ size }: any) => (size == "s" ? smallSize : size == "m" ? mediumSize : largeSize)}px;
  width: ${({ size }: any) => (size == "s" ? smallSize : size == "m" ? mediumSize : largeSize)}px;
  color: #f4f4f6;
`
