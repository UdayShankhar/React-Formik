import React from "react";
import {Formik,Form} from 'formik';
import './Signup.css';
import { Textfield } from "./Textfield";
import * as Yup from 'yup';

function Signup (){
    const validate = Yup.object({
        firstName:Yup.string()
        .max(20,"Must be 20 characters or less")
        .required("Required"),
        lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is Required"),
        password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .required("Password is Required"),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref("password"),null],"Password must match")
            .required("Confirm password is Required"),
    })

const Register = () => {
    alert("Hurray! Welcome Onboard")
}

    return(
        <Formik 
        initialValues={{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        }}
        validationSchema={validate}
        onSubmit={values=>{
            console.log(values)
        }}
        >
        {formik => (
        <div className="main">
                <h2 className="name">Sign Up</h2>
                <Form>
                <div className="fields">  
                 <Textfield label="First Name" name="firstname" type="text"/>
                        <Textfield label="Last Name" name="lastname" type="text" />
                        <Textfield label="Email" name="email" type="email" />
                        <Textfield label="password" name="password" type="password" />
                        <Textfield label="Confirm password" name="confirmpassword" type="password" />
                <button type="submit" className="submit" onClick={Register} >Register</button>
                <button type="reset" className="reset">Reset</button>
                        </div>
                </Form>
                </div>
            )}
        </Formik>
    )
}

export default Signup;