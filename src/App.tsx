import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { getDbSheetData } from "./Apis/googleApiCalls"
import "./App.css"
import { AppContext } from "./contexts/AppContext"
import { Contacts } from "./modules/Contacts"
import { Home } from "./modules/Home"
import { Login } from "./modules/Login"
import { ScreenSaver } from "./modules/ScreenSaver"
import { Background } from "./styled/layout"

function App() {
  const { db, setDb } = React.useContext(AppContext)
  const [userActive, setUserActive] = React.useState<boolean>(true)
  const userLastActiveAt = React.useRef<any>(null)
  const [data, setData] = React.useState<any>({ data: null, fields: null })

  const tableWidth: any = {
    "#": 50,
    Bank: 200,
    "Account Owner": 200,
    "Account Type": 200,
    GPay: 200,
    "Account No.": 200,
    IFSC: 200,
    CVV: 200,
    Addr1: 200,
    Addr2: 200,
    Addr3: 200,
    City: 200,
    State: 200,
    pincode: 200,
    "Phone number": 200,
    Email: 200,
    "PAN Card": 100
  }
  async function fetchDbData() {
    const response = await getDbSheetData()
    setDb(response)
  }

  const onActive = React.useCallback(() => {
    setUserActive(true)
  }, [])
  const onInactive = React.useCallback(() => {
    setUserActive(false)
  }, [])

  React.useEffect(() => {
    ["mousemove", "keydown", "click", "scroll"].forEach((event) =>
      window.addEventListener(event, () => {
        if (!userActive) {
          onActive()
        }
        userLastActiveAt.current = new Date().getTime()
      })
    )
    var timer = setInterval(() => {
      // 5 minutes
      if (new Date().getTime() - userLastActiveAt.current > 300000) {
        onInactive()
        userLastActiveAt.current = new Date().getTime()
      }
    }, 60000)
    return () => {
      clearTimeout(timer)
    }
  }, [userActive])

  React.useEffect(() => {
    fetchDbData()
  }, [])

  return (
    <Background className="App">
      <ScreenSaver show={!userActive} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </Background>
  )
}

export default App
