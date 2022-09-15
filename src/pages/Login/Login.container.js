import React from 'react';
import FormikContainer from '../../Components/FormikContainer/FormikContainer.js'
import Login from "./Login"

function LoginContainer (){
    const initialValues ={
        email: '',
        password: ''
    }
    const handleSubmit = ((values) =>{
        console.log(values)
    })
    return (
        <FormikContainer 
            initialValues={initialValues}
            onSubmit={handleSubmit}
            component={Login}
        />
    )
}
export default LoginContainer