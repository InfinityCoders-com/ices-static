import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AppContext } from "../../contexts/AppContext"
import { Input } from "../../styled"
import { AppsContainer } from "../../styled/layout"
import { Flex } from "../../UI Library/Components/Layout/Flex"
import { getloggedInUserDetails } from "../../utils/storage"
import { AppMenu } from "../AppMenu"
import { getAllContactsSortedAndGroupedByFirstLetter } from "./service"
import { ContactDetails } from "./Details"

interface Contact {}

const Sidebar = styled.div`
  width: 30%;
  height: 100%;
  overflow: hidden;
  // min-width: 150px;
  // max-width: 300px;
`

const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: 12px;
  padding-right: 12px;
`

const SearchInput = styled(Input)`
  border-radius: 6px;
  padding: 8px 16px;
  border: 1px solid #323232;
  font-size: 12px;
`

const ContactListContainer = styled.div`
  position: relative;
  overflow: auto;
  height: calc(100% - 30px);
`

const LetterGroup = styled.div`
  position: sticky;
  padding: 8px 16px;
  color: #aaaaab;
`

const ContactItem = styled.div<{ selected: boolean }>`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.2px;
  padding: 8px 16px;
  cursor: pointer;
  color: #f4f4f6;
`


export const Contacts: React.FC = () => {
  const [search, setSearch] = React.useState("")
  const [selectedContact, setSelectedContact] = useState<any>(null)
  const {
    db: { allTabData }
  } = React.useContext(AppContext)
  const navigate = useNavigate()

  const loginUser = React.useMemo(() => getloggedInUserDetails(), [])

  React.useEffect(() => {
    if (!getloggedInUserDetails()) {
      navigate("/login")
    }
  }, [])

  const contacts = React.useMemo(() => {
    if (search) {
      let c = allTabData?.contacts?.rows.filter(
        (i: any) => i.firstName.toLowerCase().includes(search) || i.lastName.toLowerCase().includes(search)
      )
      return getAllContactsSortedAndGroupedByFirstLetter(c)
    }
    if (allTabData?.contacts?.rows?.length) {
      return getAllContactsSortedAndGroupedByFirstLetter(allTabData?.contacts.rows)
    }
    return []
  }, [allTabData?.contacts, search])
  

  return (
    <Flex flexWrap="nowrap" style={{ height: "100%" }}>
      <AppMenu />
      <AppsContainer>
        <Sidebar>
          <SearchContainer>
            <SearchInput className="m0" placeholder="Search" value={search} onChange={({ target }: any) => setSearch(target.value)} />
          </SearchContainer>
          <ContactListContainer>
            {Object.keys(contacts).map((letter: string) => (
              <Flex flexDirection="column" key={letter}>
                {contacts[letter].map((contact: any) => (
                  <ContactItem key={contact.id} selected={selectedContact?.id === contact.id} onClick={() => setSelectedContact(contact)}>
                    {`${contact.firstName || ""} ${contact.lastName || ""}`}
                  </ContactItem>
                ))}
              </Flex>
            ))}
          </ContactListContainer>
        </Sidebar>
        <ContactDetails contact={selectedContact} />
      </AppsContainer>
    </Flex>
  )
}
