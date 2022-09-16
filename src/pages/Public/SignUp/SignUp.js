import React from "react";
<<<<<<< HEAD:src/pages/SignUp/SignUp.js
import { Formik } from "formik";
import Header from "../../Campaigns/School/Header";
import * as Yup from "yup";
import { registerFieldData } from "../../data/formsData";
import DynamicForm from "../../Components/DynamicForm/DynamicForm";
=======
import { Field, Form, ErrorMessage } from "formik";
import Header from "../../../Components/Header/Header";
>>>>>>> dev:src/pages/Public/SignUp/SignUp.js
function SignUp() {
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
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div className="flex flex-col absolute h-full w-full">
        <Header />
        <div className="flex flex-col items-center h-full justify-center">
          <div className="w-9/12 mb-8">
            <h3>Welcome</h3>
            <h3 className="text-3xl">Create your account.</h3>
          </div>
          <div className="w-9/12">
            <DynamicForm buttonName="Register" data={registerFieldData} />
          </div>
        </div>
      </div>
    </Formik>
  );
}

export default SignUp;
