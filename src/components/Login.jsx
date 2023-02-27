import React from 'react'
import './common.css'

const Login = ({ onRegister, onReset, onShowPassowrd, onTogglePassword }) => {

    return (
        <>
            <div className='container shadow'>
                <form style={{ width: "40VW", margin: "auto", marginTop: "60px" }}>
                    <h1>Login</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name : </label>
                        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type={onShowPassowrd ? "text" : "password"}
                            className="form-control"
                            id="exampleInputPassword1"
                             />

                        <span style={{
                            marginLeft: "530px",
                            position: "relative", top: "-30px", right: "5px" }}
                            onClick={onTogglePassword}>
                            {onShowPassowrd ? <i className="bi bi-eye-slash" ></i> : <i className="bi bi-eye"></i>}
                            
                        </span>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br />
                    <br />
                    <a href='#' onClick={onReset}>Forgot password</a>
                    <br />
                    <br />
                    <span>
                        <a href='#'>Have an account</a>{" "}
                        <a href='#' onClick={onRegister}>Register</a>
                    </span>
                </form>
            </div>
        </>
    )
}

export default Login