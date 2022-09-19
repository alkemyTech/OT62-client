import React from 'react'
import {Form, Field, ErrorMessage } from 'formik';
const DynamicForm  = ({data, buttonName}) => {
    
    return (  
      <Form>
        {(data.map((elem, index) => (
             <div key={index}>
             <Field 
                 className="w-3/5 h-3/5 border border-solid rounded-lg border-gray-400 mb-6 mr-8 p-2.5"
                   id={elem.id}
                   name={elem.name}
                   type={elem.type}
                   placeholder={elem.placeholder} 
             />
              <ErrorMessage name={elem.name}/>
             </div>
        )))}
        <div className="w-[50%] border bg-red-600 rounded-lg p-2.5 text-center">
              <button className="text-center text-white text-sm" type="submit">
                {buttonName}
              </button>
            </div>
      </Form>
    );
}
 
export default DynamicForm ;