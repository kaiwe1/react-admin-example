import React from "react"
import LoginForm from "./components/LoginForm"
import "./style.scss"

const Login = () => {
  return (
    <div id='login'>
        <div className="login-container">
            <h1>Admin</h1>
            <LoginForm />
        </div>
    </div>
  )
}

export default Login