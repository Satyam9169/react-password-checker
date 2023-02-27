import React from 'react'

const Reset = ({onLogin}) => {
    return (
        <>
            <div className='container shadow'>
                <form style={{ width: "40VW", margin: "auto", marginTop: "60px" }}>
                <i className="bi bi-x-circle fs-4" onClick={onLogin}></i>
                    <h1>Reset Password</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button><br/>
                    <span>Will send you a reset link</span>
                </form>
            </div>
        </>
    )
}

export default Reset