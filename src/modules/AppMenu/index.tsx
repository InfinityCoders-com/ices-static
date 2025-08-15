import React from "react"
import styled from "styled-components"
import { Flex } from "../../UI Library/Components/Layout/Flex"
import { smallSize, mediumSize, largeSize, gap } from "../../constants/iconsSizes"
import { AddressBookIcon, HouseIcon } from "../../Icons"
import { useNavigate } from "react-router-dom"
import { MoneyWavy } from "../../MoneyWavy"

const MenuIconContainer = styled(Flex).attrs({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexBasis: 80,
  flexGap: 20
})`
  padding: 30px 15px;
`

const MenuIcons = styled(Flex).attrs({ alignItems: "center", justifyContent: "center" })<{ size: any }>`
  border-radius: 16px;
  height: ${({ size }: any) => (size == "s" ? smallSize : size == "m" ? mediumSize : largeSize)}px;
  width: ${({ size }: any) => (size == "s" ? smallSize : size == "m" ? mediumSize : largeSize)}px;
  color: #f4f4f6;
  background: #2b2b2d;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  transition: 0.6s ease-in;
  &:active {
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1), inset 0 0 12px 2px rgba(252, 252, 252, 0.1);
    transition: 0.2s ease-out;
  }
`

export function AppMenu() {
  const navigate = useNavigate()
  return (
    <MenuIconContainer>
      <MenuIcons size="s" onClick={() => navigate("/")}>
        <HouseIcon size={18} color="#f4f4f6" />
      </MenuIcons>
      <MenuIcons size="s" onClick={() => navigate("/contacts")}>
        <AddressBookIcon size={18} color="#f4f4f6" />
      </MenuIcons>
      <MenuIcons size="s" onClick={() => navigate("/expenses")}>
        <MoneyWavy size={18} color="#f4f4f6" />
      </MenuIcons>
    </MenuIconContainer>
  )
}
