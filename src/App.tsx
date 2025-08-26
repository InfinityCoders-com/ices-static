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
import { Expenses } from "./modules/Expenses"

function App() {
  const { db, setDb } = React.useContext(AppContext)
  const [userActive, setUserActive] = React.useState<boolean>(true)
  const userLastActiveAt = React.useRef<any>(null)
  const [data, setData] = React.useState<any>({ data: null, fields: null })

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
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </Background>
  )
}

export default App
