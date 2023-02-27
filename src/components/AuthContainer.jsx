import React from 'react'
import { useState } from 'react'
import Login from "./Login"
import Register from "./Register"
import Reset from "./Reset"

const AuthContainer = () => {
    const [auth, setAuth] = useState({
        login: true,
        register: false,
        reset: false
    })

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    // const [login, setLogin] = useState(true );
    // const [register, setRegister] = useState(false);
    // const [reset, setReset] = useState(false);

    const handleRegister = () => {
        setAuth({login: false, register: true, reset: false});
        // setLogin(false);
        // setRegister(true);
        // setReset(false);
    };

    const handleReset = () => {
        setAuth({login: false, register: false, reset: true});
        // setLogin(false);
        // setReset(true);
        // setRegister(false);
    };

    const handleLogin = () => {
        setAuth({login: true, register: false, reset: false});
        // setLogin(true);
        // setReset(false);
        // setRegister(false);
    };
    
  return (
    <>
    <div className='container'>
        {auth.login && <Login onRegister={handleRegister}
        onReset={handleReset} onShowPassowrd={showPassword} onTogglePassword={handleTogglePassword}/>}
        {auth.register && <Register onLogin={handleLogin} onShowPassowrd={showPassword} onTogglePassword={handleTogglePassword} />}
        {auth.reset && <Reset onLogin={handleLogin} />}
    </div>
    </>
  )
}

export default AuthContainer