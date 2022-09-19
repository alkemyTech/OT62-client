import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerFieldData } from "../../../data/formsData";
import DynamicForm from "../../../Components/DynamicForm/DynamicForm";

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
      <div className="flex my-6 m-auto flex-col h-full w-full">
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
