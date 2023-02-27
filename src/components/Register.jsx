import React, { useState } from 'react'
import { useEffect } from 'react';
import './common.css'

const Register = ({ onLogin, onShowPassowrd, onTogglePassword }) => {
    
    const [showIndicator, setShowIndicator] = useState(false);
    const [pass, setPass] = useState("");      

    const [passLetter, setPassLetter] = useState(false);
    const [passNumber, setPassNumber] = useState(false);
    const [passChar, setPassChar] = useState(false);
    const [passLength, setPassLength] = useState(false);
    const [passComplete, setPassComplete] = useState(false);


    const handleShowIndicator = () => {
        setShowIndicator(true);
    };

    const handlePasswordChange = (e) => {
        setPass(e.target.value);
        console.log(pass);
    };


    useEffect(() => {
        // check if lower case and uppercase
        if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            setPassLetter(true);
        } else {
            setPassLetter(false);
        }
        // check for Numbers
        if (pass.match(/([0-9])/)) {
            setPassNumber(true);
        } else {
            setPassNumber(false);
        }

        if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
            setPassChar(true);
        } else {
            setPassChar(false);
        }

        if (pass.length > 7) {
            setPassLength(true);
        } else {
            setPassLength(false);
        }

        if (passLetter && passChar && passNumber && passLength) {
            setPassComplete(true);
        } else {
            setPassComplete(false);
        }

    }, [pass, passChar, passNumber, passLetter, passLength])


    return (
        <>
            <div className='container shadow'>
                <form style={{ width: "40VW", margin: "auto", marginTop: "60px" }}>
                    <h1>Register</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name : </label>
                        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type={onShowPassowrd ? "text" : "password"}
                            className="form-control"
                            id="exampleInputPassword1"
                            onFocus={handleShowIndicator}
                            value={pass}
                            onChange={handlePasswordChange} />

                        <span style={{
                            marginLeft: "530px",
                            position: "relative", top: "-30px", right: "5px" }}
                            onClick={onTogglePassword}>
                                
                            {onShowPassowrd ? <i className="bi bi-eye-slash" ></i> : <i className="bi bi-eye"></i>}
                        </span>
                    </div>

                    <button onClick={() => alert(pass)} disabled={!passComplete}
                        className={passComplete ? "btn btn-primary btn-block" : "btn btn-primary btn-block btn-disabled"}>Submit</button>

                    <br />
                    <br />
                    <span>
                        <a href='#'>Have an account</a>{" "}{" "}
                        <a href='#' onClick={onLogin}>Login</a>
                    </span>
                    {/* Password strength */}
                    <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
                        <ul style={{ listStyleType: "none" }}>
                            <br />
                            <p>Password Strength indicator</p>
                            <li className={passLetter ? "pass-green" : "pass-red"}>
                                {passLetter ? <i className="bi bi-check" style={{ fontSize: "22px" }}></i> :
                                    <i className="bi bi-dot" style={{ fontSize: "22px" }}></i>} Lower & uppercase </li>

                            <li className={passNumber ? "pass-green" : "pass-red"}>
                                {passNumber ? <i className="bi bi-check" style={{ fontSize: "22px" }}></i> :
                                    <i className="bi bi-dot" style={{ fontSize: "22px" }}></i>} Numbers (0 - 9) </li>

                            <li className={passChar ? "pass-green" : "pass-red"}>
                                {passChar ? <i className="bi bi-check" style={{ fontSize: "22px" }}></i> :
                                    <i className="bi bi-dot" style={{ fontSize: "22px" }}></i>} Special Character(!@#$%^&*) </li>

                            <li className={passLength ? "pass-green" : "pass-red"}>
                                {passLength ? <i className="bi bi-check" style={{ fontSize: "22px" }}></i> :
                                    <i className="bi bi-dot" style={{ fontSize: "22px" }}></i>} Atleast 8 Character </li>
                        </ul>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;