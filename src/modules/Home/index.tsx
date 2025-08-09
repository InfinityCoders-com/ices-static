import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AppContext } from "../../contexts/AppContext"
import { Flex } from "../../UI Library/Components/Layout/Flex"
import { getloggedInUserDetails } from "../../utils/storage"
import { smallSize, mediumSize, largeSize, gap  } from '../../constants/iconsSizes'
import { AppMenu } from "../AppMenu"

const AppsContainer = styled(Flex).attrs({
  alignItems: "flex-start",
  justifyContent: "center",
  flexBasis: "calc(100% - 80px)"
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

const Icons = styled(Flex).attrs({ alignItems: "center", justifyContent: "center" })<{ size: any }>`
  background: #222224;
  border-radius: 16px;
  height: ${({ size }: any) => (size == "s" ? smallSize : size == "m" ? mediumSize : largeSize)}px;
  width: ${({ size }: any) => (size == "s" ? smallSize : size == "m" ? mediumSize : largeSize)}px;
  color: #f4f4f6;
`

export const Home: React.FC = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { db, setDb } = React.useContext(AppContext)
  const navigate = useNavigate()
  const loginUser = React.useMemo(() => getloggedInUserDetails(), [])

  React.useEffect(() => {
    if (!getloggedInUserDetails()) {
      navigate("/login")
    }
  }, [])

  return (
    <Flex flexWrap="nowrap" style={{ height: "100%" }}>
      <AppMenu />
      <AppsContainer flexWrap="wrap" flexGap={gap}>
        <Flex flexDirection="column" flexWrap="wrap" flexGap={gap} style={{ width: mediumSize, height: largeSize }}>
          <Flex flexWrap="wrap" flexGap={gap} style={{ width: mediumSize, height: mediumSize }}>
            <Icons size="s"></Icons>
            <Icons size="s"></Icons>
            <Icons size="s"></Icons>
            <Icons size="s"></Icons>
          </Flex>
          <Flex flexWrap="wrap" flexGap={gap} style={{ width: mediumSize, height: mediumSize }}>
            <Icons size="s"></Icons>
            <Icons size="s"></Icons>
            <Icons size="s"></Icons>
            <Icons size="s"></Icons>
          </Flex>
        </Flex>
        <Flex flexWrap="wrap" flexGap={gap} style={{ width: largeSize, height: largeSize }}>
          <Icons size="m"></Icons>
          <Icons size="m"></Icons>
          <Icons size="m"></Icons>
          <Icons size="m"></Icons>
        </Flex>
        <Flex flexWrap="wrap" flexGap={gap} style={{ width: largeSize, height: largeSize }}>
          <Icons size="m"></Icons>
          <Icons size="m"></Icons>
          <Icons size="m"></Icons>
          <Icons size="m"></Icons>
        </Flex>
        <Flex flexWrap="wrap" flexGap={gap}>
          <Icons size="m"></Icons>
          <Icons size="m"></Icons>
          <Icons size="m"></Icons>
          <Icons size="m"></Icons>
          <Icons size="m"></Icons>
        </Flex>
        <Flex flexWrap="wrap" flexGap={gap}>
          <Icons size="s"></Icons>
          <Icons size="s"></Icons>
          <Icons size="s"></Icons>
          <Icons size="s"></Icons>
          <Icons size="s"></Icons>
          <Icons size="s"></Icons>
          <Icons size="s"></Icons>
          <Icons size="s"></Icons>
          <Icons size="s"></Icons>
          <Icons size="s"></Icons>
        </Flex>
      </AppsContainer>
    </Flex>
  )
}
