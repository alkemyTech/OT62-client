import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerFieldData } from "../../../data/formsData";
import DynamicForm from "../../../Components/DynamicForm/DynamicForm";
import { useNavigate } from "react-router-dom";
import APICalls from "../../../shared/APICalls";
function SignUp() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        password: Yup.string()
          .required("Required")
          .min(6, "Password is too short - should be 6 chars minimum."),
      })}
      onSubmit={async (values) => {
        try {
          const response = await APICalls.post("/auth/register", values);
          sessionStorage.setItem("token", response.config.headers.Authorization);
          if (response.status === 200) {
            setSuccessMessage(response.data.msg);
          }
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } catch (error) {
          setErrorMessage("There was an error trying to register")
          
        }
      }}
    >
      <div className="flex my-6 m-auto flex-col h-full w-full">
        <div className="flex flex-col items-center h-full justify-center">
          <div className="w-9/12 mb-8">
            <h3>Welcome</h3>
            <h3 className="text-3xl">Create your account.</h3>
          </div>
          <div className="w-9/12">
            <DynamicForm buttonName="Register" data={registerFieldData} />
          {successMessage?<div className="text-red-600 pt-8 text-2xl">{successMessage}</div>:
          errorMessage && <div className="text-red-600 pt-8 text-2xl">{errorMessage}</div>}
          </div>
        </div>
      </div>
    </Formik>
  );
}

export default SignUp;
