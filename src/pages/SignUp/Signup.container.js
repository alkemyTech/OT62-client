import React from 'react';
import FormikContainer from '../../Components/FormikContainer/FormikContainer'
import SignUp from "./SignUp"
import * as Yup from 'yup'
function SignUpContainer (){
    const initialValues ={
        firstName: '',
        lastName: '',
        email:'',
        password:'',
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        password: Yup.string().required("Required").min(6, 'Password is too short - should be 6 chars minimum.')
    }) 
    const handleSubmit = ((values) =>{
        console.log(values)
    })
    return (
        <FormikContainer 
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            component={SignUp}
        />
    )
}
export default SignUpContainer