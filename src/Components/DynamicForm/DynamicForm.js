import React from 'react'
import { Form, Field, ErrorMessage } from 'formik';

const DynamicForm = ({ data, buttonName }) => {
  return (
    <Form className='flex flex-col w-full items-center'>
      {(data.map((elem, index) => (
        <div key={index} className='flex flex-col w-full'>
          <Field
            className="m-auto border border-solid rounded-lg border-gray-400 p-2.5 w-full sm:w-[60%]"
            id={elem.id}
            name={elem.name}
            type={elem.type}
            placeholder={elem.placeholder}
          />
          <p className='text-red-400 font-semibold mb-6 text-center'>
            <ErrorMessage name={elem.name} />
          </p>
        </div>
      )))}
      <div className="w-full text-center sm:w-[60%] sm:self-center">
        <button className="px-6 py-2 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center text-sm shadow-lg" type="submit">{buttonName}</button>
      </div>
    </Form>
  );
}

export default DynamicForm;