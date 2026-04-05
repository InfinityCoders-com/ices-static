import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AppContext } from "../../contexts/AppContext"
import { containerRightSpacing, containerVSpacing } from "../../styled/composeStyled"
import { AppsContainer, PageContainer } from "../../styled/layout"
import { getAtombergAccessToken, getloggedInUserDetails } from "../../utils/storage"
import { AppMenu } from "../AppMenu"

const Sidebar = styled.div`
  width: 10%;
  height: 100%;
  overflow: hidden;
  min-width: 150px;
  max-width: 450px;
  ${containerRightSpacing}
`

const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  margin-right: 10%;
  ${containerVSpacing}
  ${containerRightSpacing}
`

const ContactListContainer = styled.div`
  position: relative;
  overflow: auto;
  height: calc(100% - 30px);
`

export const Atomberg: React.FC = () => {
  const {
    db: { allTabData }
  } = React.useContext(AppContext)
  const [atombergAccessToken, setAtombergAccessToken] = React.useState({ timestamp: new Date().getTime(), token: null })
  const navigate = useNavigate()

  const loginUser = React.useMemo(() => getloggedInUserDetails(), [])
  async function fetchAtombergAccessToken() {
    try {
      const accessToken = getAtombergAccessToken()
      const response = await fetch(`https://api.developer.atomberg-iot.com/v1/get_access_token`, {
        method: "GET", // or 'PUT', etc.
        headers: {
          "Content-Type": "application/json", // Example of a common header
          "x-api-key": "fDeqrkERzswLl51p6gpnuak26PFjyZFdoHh925C5",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imdvb2dsZV8xMDEwNDA0ODMzNTUwNjg5OTk5NDIiLCJ0eXBlIjoicmVmcmVzaCIsImlzcyI6ImRldmVsb3Blci5hdG9tYmVyZy1pb3QuY29tIiwiZGV2ZWxvcGVyX2lkIjoicHZHZUFNaW9zTCIsImp0aSI6IjMyOTYwYTJmLWVkNTEtNGMxMS1iMTJjLTQxODQzOTEwNzkwMiIsImlhdCI6MTc3MjA0OTcxNywiZXhwIjoyMDg3NDA5NzE3fQ.llx7RMCLWdyCP12bwMRNAxZTPwWKvut918Da-alC06I"
        }
      })

      const token = await response.json()
      setAtombergAccessToken({ timestamp: new Date().getTime(), token })
      console.log(accessToken, "accessToken")
      // const device = await fetch(`https://api.developer.atomberg-iot.com/v1/get_list_of_devices`, {
      //   method: "GET", // or 'PUT', etc.
      //   headers: {
      //     "Content-Type": "application/json", // Example of a common header
      //     "x-api-key": "fDeqrkERzswLl51p6gpnuak26PFjyZFdoHh925C5",
      //     Authorization: `Bearer ${accessToken?.message?.access_token}`
      //   }
      // })
      // const devices = await device.json()
      // console.log(devices?.message?.devices_list, accessToken?.message?.access_token)
      // const swatiroomfan = devices?.message?.devices_list?.find((i: any) => i.name === "TV Fan")?.device_id
      // const command = await fetch(`https://api.developer.atomberg-iot.com/v1/send_command`, {
      //   method: "POST", // or 'PUT', etc.
      //   headers: {
      //     "Content-Type": "application/json", // Example of a common header
      //     "x-api-key": "fDeqrkERzswLl51p6gpnuak26PFjyZFdoHh925C5",
      //     Authorization: `Bearer ${accessToken?.message?.access_token}`
      //   },
      //   body: JSON.stringify({ device_id: swatiroomfan, command: { power: false } })
      // })
    } catch (e) {}
  }
  React.useEffect(() => {
    if (!getloggedInUserDetails()) {
      navigate("/login")
    }
  }, [])

  return (
    <AppsContainer flexWrap="nowrap" style={{ height: "100%" }}>
      <AppMenu />
      <PageContainer>
        <Sidebar>
          <SearchContainer></SearchContainer>
        </Sidebar>
        <ContactListContainer>
          <div className="flex">
            <div className="calendar"></div>
          </div>
        </ContactListContainer>
      </PageContainer>
    </AppsContainer>
  )
}
