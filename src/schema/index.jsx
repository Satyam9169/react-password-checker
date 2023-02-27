import * as Yup from "yup";

export const signUpSchema = Yup.object({
name: Yup.string().min(2).max(12).required("Please Enter your name"),
email: Yup.string().email().required("Please Enter email"),
password: Yup.string().min(6).required("please enter password"),
confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "password must be match")
})
