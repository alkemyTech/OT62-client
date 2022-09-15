import React from "react";
import { Formik } from "formik";

const FormikContainer = ({
  initialValues,
  onSubmit,
  validationSchema,
  component: Component,
  ...props
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
        
      {(formikProps) => (
        
       <Component {...formikProps}{...props}/>
      )}
    </Formik>
  );
};

export default FormikContainer;
