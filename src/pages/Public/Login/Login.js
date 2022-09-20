import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import DynamicForm from "../../../Components/DynamicForm/DynamicForm"
import {loginFieldData} from "../../../data/formsData"

function Login() {
  return (

<Formik
    initialValues ={{
      email: '',
      password: ''
  }}
   onSubmit = {((values) =>{
      console.log(values)
  })}
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
