import { useFormik } from 'formik'
import React from 'react'
import { signUpSchema } from '../schema'

const Reg = () => {

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    }

    const { values, errors, touched, handleBlure, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        },
    })
    console.log(errors);

    return (
        <>
            <div className='container'>
                <form style={{ width: "40VW", margin: "auto", marginTop: "60px" }}
                    onSubmit={handleSubmit}>
                    <h1>Registration form with validation</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">userName</label>
                        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            name="name"
                            autoComplete='off'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlure}
                        />
                        {errors.name && touched.name ? (<p className='text-danger'>{errors.name}</p>) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail2" className="form-label">email</label>
                        <input type="email" className="form-control" id="exampleInputEmail2"
                            name="email"
                            autoComplete='off'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlure} />
                    </div>
                    {errors.email && touched.email ? (<p className='text-danger'>{errors.email}</p>) : null}
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            name="password"
                            autoComplete='off'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlure}
                        />
                    {errors.password && touched.password ? (<p className='text-danger'>{errors.password}</p>) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2"
                            name="confirm_password"
                            autoComplete='off'
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlure}
                        />
                    </div>
                    {errors.confirm_password && touched.confirm_password ? (<p className='text-danger'>{errors.confirm_password}</p>) : null}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Reg