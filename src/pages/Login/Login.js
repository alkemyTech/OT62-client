import React from "react";
import { Field, Form } from "formik";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <div>
        <h6>Bienvenido</h6>
        <h3>Inicia sesión en tu cuenta!</h3>
      </div>
      <div>
        <Form>
          <div>
            <label>Email</label>
            <Field id="email" name="email" type="email" />
          </div>

          <div>
            <label>Password</label>
            <Field id="password" name="password" type="password" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </div>
      <p>
        No tienes una cuenta? <Link to="./register-user">Registrate</Link>
      </p>
    </div>
  );
}

export default Login;
