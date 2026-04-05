import axios from "axios"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { IAxiosResponse } from "./Apis/axios"
import { AppContext } from "./contexts/AppContext"
import { Atomberg } from "./modules/Atomberg"
import { Calendar } from "./modules/Calendar"
import { Contacts } from "./modules/Contacts"
import { Expenses } from "./modules/Expenses"
import { Home } from "./modules/Home"
import { Login } from "./modules/Login"
import { ScreenSaver } from "./modules/ScreenSaver"
import "./styled/css/App.css"
import "./styled/css/layout.css"
import "./styled/css/spacing.css"
import { Background } from "./styled/layout"
import { getUserDetails } from "./Apis/UserApis"

function App() {
  const { db, setDb } = React.useContext(AppContext)
  const [userActive, setUserActive] = React.useState<boolean>(true)
  const userLastActiveAt = React.useRef<any>(null)
  const [data, setData] = React.useState<any>({ data: null, fields: null })
  async function checkLogin() {
    try {
      const userDetails: IAxiosResponse<any> = await getUserDetails()
      console.log(userDetails)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    checkLogin()
  }, [])

  React.useEffect(() => {
    const api = axios.create({ baseURL: "http://localhost:3000", timeout: 10000 })

    api.interceptors.response.use(
      (response) => response,
      (error) => {}
    )

    api.interceptors.request.use(
      (config) => {
        console.log(config, "config")
        return config
      },
      (error) => {
        if (error?.response?.status === 401) {
          // navigate("/login")
        }
        return Promise.reject(error)
      }
    )
  }, [])
  async function fetchAtombergAccessToken() {
    try {
      const response = await fetch(`https://api.developer.atomberg-iot.com/v1/get_access_token`, {
        method: "GET", // or 'PUT', etc.
        headers: {
          "Content-Type": "application/json", // Example of a common header
          "x-api-key": "fDeqrkERzswLl51p6gpnuak26PFjyZFdoHh925C5",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imdvb2dsZV8xMDEwNDA0ODMzNTUwNjg5OTk5NDIiLCJ0eXBlIjoicmVmcmVzaCIsImlzcyI6ImRldmVsb3Blci5hdG9tYmVyZy1pb3QuY29tIiwiZGV2ZWxvcGVyX2lkIjoicHZHZUFNaW9zTCIsImp0aSI6IjMyOTYwYTJmLWVkNTEtNGMxMS1iMTJjLTQxODQzOTEwNzkwMiIsImlhdCI6MTc3MjA0OTcxNywiZXhwIjoyMDg3NDA5NzE3fQ.llx7RMCLWdyCP12bwMRNAxZTPwWKvut918Da-alC06I"
        }
      })
      const accessToken = await response.json()
      const device = await fetch(`https://api.developer.atomberg-iot.com/v1/get_list_of_devices`, {
        method: "GET", // or 'PUT', etc.
        headers: {
          "Content-Type": "application/json", // Example of a common header
          "x-api-key": "fDeqrkERzswLl51p6gpnuak26PFjyZFdoHh925C5",
          Authorization: `Bearer ${accessToken?.message?.access_token}`
        }
      })
      const devices = await device.json()
      console.log(devices?.message?.devices_list, accessToken?.message?.access_token)
      const swatiroomfan = devices?.message?.devices_list?.find((i: any) => i.name === "TV Fan")?.device_id
      const command = await fetch(`https://api.developer.atomberg-iot.com/v1/send_command`, {
        method: "POST", // or 'PUT', etc.
        headers: {
          "Content-Type": "application/json", // Example of a common header
          "x-api-key": "fDeqrkERzswLl51p6gpnuak26PFjyZFdoHh925C5",
          Authorization: `Bearer ${accessToken?.message?.access_token}`
        },
        body: JSON.stringify({ device_id: swatiroomfan, command: { power: false } })
      })
    } catch (e) {}
  }

  const onActive = React.useCallback(() => {
    setUserActive(true)
  }, [])
  const onInactive = React.useCallback(() => {
    setUserActive(false)
  }, [])

  React.useEffect(() => {
    ;["mousemove", "keydown", "click", "scroll"].forEach((event) =>
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
  console.log(db, "db")
  return (
    <Background className="App">
      <ScreenSaver show={!userActive} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/atomberg" element={<Atomberg />} />
          {/* <Route path="/todo" element={<Todo />} /> */}
        </Routes>
      </BrowserRouter>
    </Background>
  )
}

export default App
