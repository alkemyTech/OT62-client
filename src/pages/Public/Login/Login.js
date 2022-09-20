import React, { useState } from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import DynamicForm from "../../../Components/DynamicForm/DynamicForm";
import { loginFieldData } from "../../../data/formsData";
import APICalls from "../../../shared/APICalls";
function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values) => {
        try {
          const response = await APICalls.post("/auth/login", values);
          sessionStorage.setItem(
            "token",
            response.config.headers.Authorization
          );
          navigate("/");
        } catch (error) {
          if (error) {
            setErrorMessage("There's been a problem while logging in");
            console.log(error.message);
          }
        }
      }}
    >
      <div className="flex flex-col absolute h-full w-full">
        <div className="flex  justify-center h-full">
          <div className="w-2/4 flex flex-col justify-center items-center">
            <div className="w-9/12 mb-8">
              <h6>Bienvenido</h6>
              <h3 className="text-3xl">Inicia sesión en tu cuenta!</h3>
            </div>
            <div className="w-9/12">
              <DynamicForm buttonName="Inicia sesion" data={loginFieldData} />
              {errorMessage && (
                <div className="text-red-600 pt-2.5">{errorMessage}</div>
              )}
            </div>
            <div className="relative top-1/4 right-9">
              <p className="text-xl">
                No tienes una cuenta?{" "}
                <Link to="/register-user" className="text-xl text-red-500">
                  Registrate
                </Link>
              </p>
            </div>
          </div>

          <img
            className="w-3/6"
            src="https://media.istockphoto.com/photos/united-through-their-diversity-picture-id614211848?k=20&m=614211848&s=612x612&w=0&h=XJA_xolV3AOcgiOvYEHX2dlRqCFhMNaceRh7oB6A5Hg="
            alt="login-img"
          />
        </div>
      </div>
    </Formik>
  );
}

export default Login;
