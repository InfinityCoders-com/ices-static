import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { login } from "../../Apis/authApis"
import { IAxiosResponse } from "../../Apis/axios"
import { getUserDetails } from "../../Apis/UserApis"
import { AppContext } from "../../contexts/AppContext"
import { isGuestAuthorizationAllowed } from "../../selectors/db"
import { Input } from "../../styled"

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  background: #222224;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
`

const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  color: #f4f4f6;
`

const LoginInput = styled(Input)`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
`

const Button = styled.button<{ variant?: "primary" | "guest" }>`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  outline: none;
  background: ${(props) => (props.variant === "guest" ? "#eee" : "#1c1c1c")};
  color: ${(props) => (props.variant === "guest" ? "#333" : "#f4f4f6")};

  &:hover {
    background: ${(props) => (props.variant === "guest" ? "#ddd" : "#1c1c1c")};
  }
`

const ErrorText = styled.p`
  color: #db5f4c;
  font-size: 12px;
  text-align: center;
  line-height: 140%;
  font-family: Lato;
`

export const Login: React.FC = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { db, setDb } = React.useContext(AppContext)
  const navigate = useNavigate()

  const isGuestAllowed = React.useMemo(() => {
    if (db.allTabData) {
      return isGuestAuthorizationAllowed(db)
    }
    return false
  }, [db.allTabData])

  const handleLogin = async () => {
    if (!userName || !password) {
      setError("UserName and / or password are required.")
      return
    }

    const response = await login(userName, password)
    console.log(response, "response")
    if (response.isSuccess) {
      const userDetails: IAxiosResponse<any> = await getUserDetails()
      console.log(userDetails, "userDetails")
      if (userDetails.isSuccess && userDetails.data?.length > 0) {
        // const { id, role, userName: user } = getUserDetails(db, userName, password)
        // setloggedInUserDetails({ id, role, user })
        navigate("/")
      } else {
        setError("Username and / or Password are invalid.")
        return
      }
    }
    setError("")
  }

  const handleGuestLogin = () => {
    console.log("Logging in as guest")
    // Guest login logic
  }

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <LoginInput type="userName" placeholder="Email" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <LoginInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
        {isGuestAllowed ? (
          <Button variant="guest" onClick={handleGuestLogin}>
            Continue as Guest
          </Button>
        ) : null}
        <ErrorText>{error || ""}</ErrorText>
      </Card>
    </Container>
  )
}
