import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../FormStyles.css';

const CategoriesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: ''
    })

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <>  
            <div className=' m-6 w-[80%]'>
                <h2 className='font-bold'>¿Queres contribuir?</h2>
                <button className='my-3'>
                    <Link to="/contribuir" className="bg-red-500 p-2 rounded-xl text-white">Contribuir</Link>
                </button>
                
            </div>
            <h2 className='m-6 font-bold'>¡Contactate con nosotros!</h2>
            <form className=" m-6 w-[60%] flex flex-col" onSubmit={handleSubmit}>
                <input className="p-4 border rounded-lg my-2" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Nombre y Apellido"></input>
                <input className="p-4 border rounded-lg my-2" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Email"></input>
                <textarea className="p-4 border rounded-lg my-2" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Escribe tu consulta"></textarea>
                <button className=" mt-2 bg-blue-600 w-max p-2 rounded-xl text-white" type="submit">Enviar consultar</button>
            </form>
            <button className="mx-6 border border-black p-1 rounded-xl" type="submit">Ir al inicio</button>
        </>
    );
}
 
export default CategoriesForm;