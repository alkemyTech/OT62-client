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
    initialValues ={{
      email: '',
      password: ''
  }}
  onSubmit={async (values) => {
    try {
      const response = await APICalls.post("/auth/login", values);
      sessionStorage.setItem(
        "token",
        response.data.token
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

    <div className="flex flex-col h-full w-full my-8 md:my-0">
      <div className="w-full text-center justify-center h-full md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center items-center w-3/4 m-auto">
          <div className="mb-8">
            <h6>Bienvenido</h6>
            <h3 className="text-3xl">Inicia sesión en tu cuenta!</h3>
          </div>
          <DynamicForm buttonName="Inicia sesion" data={loginFieldData} />
          <div className="mt-12">
            <p className="text-xl">
              No tienes una cuenta? <Link to="/register-user" className="text-xl text-red-500">Registrate</Link>
            </p>
          </div>
        </div>
        
        <img
          className="hidden h-full w-full md:flex"
          src="https://media.istockphoto.com/photos/united-through-their-diversity-picture-id614211848?k=20&m=614211848&s=612x612&w=0&h=XJA_xolV3AOcgiOvYEHX2dlRqCFhMNaceRh7oB6A5Hg="
          alt="login-img"
        />

      </div>
    </div>
    </Formik>
  );
}

export default Login;
