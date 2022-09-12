import React from "react";
import { Field, Form, ErrorMessage  } from "formik";

function SignUp() {
  return (
    <div>
      <div>
        <h3>Welcome</h3>
        <h3>Create your account.</h3>
      </div>
      <div>
        <Form>
          <div>
          <label>
          First Name
        </label>
            <Field id="firstName" name="firstName" type="text" />
            <ErrorMessage  name="firstName" />
          </div>
        
          <div>
          <label>
          Last Name
        </label>
            <Field id="lastName" name="lastName" type="text" />
            <ErrorMessage  name="lastName" />
          </div>
        
          <div>
          <label>
          Email
        </label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage  name="email" />
          </div>
      
          <div>
          <label>
          Password
        </label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage  name="password" />
          </div>
      <div>
        <button type="submit">Register</button>
      </div>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
