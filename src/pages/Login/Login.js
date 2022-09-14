import React from "react";
import { Field, Form } from "formik";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div class="border-8 flex flex-col justify-center h-screen my-0 mx-auto">
      <div class="w-2/4 flex flex-col items-center">
        <h6>Bienvenido</h6>
        <h3>Inicia sesión en tu cuenta!</h3>

        <Form>
          <div class="border border-solid rounded-lg border-gray-400">
            <Field id="email" name="email" type="email" placeholder="Email" />
          </div>

          <div>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </div>
      <p>
        No tienes una cuenta? <Link to="/register-user">Registrate</Link>
      </p>
    </div>
  );
}

export default Login;
