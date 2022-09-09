import React, { useState }from "react";
import { useFormik } from "formik";
const axios = require('axios');

const RegisterUserForm = () => {
const [successMsg, setSuccessMsg] = useState(null)
const [errorMsg, setErrorMsg] = useState(null)


  const validate = (values) => {
    const errors = {};
    if (
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.password
    ) {
      errors.msg = "You have to complete all fields to submit the form";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const onSubmit = async (values) => {
    try{
      const response = await axios.post("http://localhost:5000/auth/register",values)
      if(response){
        setSuccessMsg(response.values.msg);
      }
    }
    catch(err){
      setErrorMsg(err.msg);
    }
    
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit
  });

  return (
    <>
    {!errorMsg ? <div>{successMsg}</div> : ""}
    {!successMsg ? <div>{errorMsg}</div> : ""}
      <form onSubmit={formik.handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        {formik.errors.msg && <div>{formik.errors.msg}</div>}
        {formik.errors.password && <div>{formik.errors.password}</div>}
      </div>
    </>
  );
};

export default RegisterUserForm;
