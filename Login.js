import React, { useState } from "react"
import Logo from "./logo.svg"
import "./Login.scss"

const Login = () => {

    const [ email, updateEmail ] = useState("")
    const [ password, updatePassword ] = useState("")
    const [ rememberDevice, updateRememberState ] = useState(false)
    
    return (
        <div className="login">
            <form>
                <img src={Logo} alt="logo" className="logo"/>
                <h1>Example login screen</h1>
                <p>Getting started with Green.</p>

                <label htmlFor="login-email">Email Address</label>
                <input type="email" id="login-email" required value={email} onChange={e => updateEmail(e.target.value)} />

                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" required value={password} onChange={e => updatePassword(e.target.value)} />
                
                <input type="checkbox" id="remember-checkbox" checked={rememberDevice} onChange={e => updateRememberState(e.target.checked)}/>
                <label htmlFor="remember-checkbox">Remember this device</label>
                
                <button type="submit">Sign In</button>
            </form>
        </div>
    )

}

export default Login