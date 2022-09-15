import React from "react";
import { Field, Form, ErrorMessage } from "formik";
import Header from "../../Campaigns/School/Header";
function SignUp() {
  return (
    <div className="flex flex-col absolute h-full w-full">
      <Header className="h-0" />
      <div className="flex flex-col items-center h-full justify-center">
        <div className="w-9/12 mb-8">
          <h3>Welcome</h3>
          <h3 className="text-3xl">Create your account.</h3>
        </div>
        <div className="w-9/12">
          <Form>
            <Field
              className="w-3/5 h-3/5 border border-solid rounded-lg border-gray-400 mb-6 mr-8 p-2.5"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <ErrorMessage name="firstName" />

            <Field
              className="w-3/5 h-3/5 border border-solid rounded-lg border-gray-400 mb-6 mr-8 p-2.5"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <ErrorMessage name="lastName" />

            <Field
              className="w-3/5 h-3/5 border border-solid rounded-lg border-gray-400 mb-6 mr-8 p-2.5"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" />

            <Field
              className="w-3/5 h-3/5 border border-solid rounded-lg border-gray-400 mb-6 mr-8 p-2.5"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" />

            <div className="w-3/5 border bg-red-600 rounded-lg p-2.5 text-center">
              <button className="text-center text-white text-sm" type="submit">Register</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
