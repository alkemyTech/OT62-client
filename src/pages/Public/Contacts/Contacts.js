import { useNavigate } from 'react-router-dom';
import APICalls from '../../shared/APICalls';
import { useState } from 'react';

const Contacts = () => {
  const navigate = useNavigate()

  const [ fields, setFields ] = useState({});

  const handleFields = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = async () => {
        try {
          const res = await APICalls.post('/contacts', fields)
          console.log(res)
        } catch (error) {
          console.log(error);
        }
       
      } 
      newContact();
    }
  

  return (
    <div className='flex flex-col gap-4 w-10/12 pb-16 my-7 mx-auto'>
      <h1 className='text-2xl font-semibold text-center sm:text-start'>¿Quieres Contribuir?</h1>
      <button className='my-2 px-2.5 py-1 w-fit bg-red-600 text-white border rounded-lg '>Contribuir</button>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold text-center sm:text-start'>¡Contactate con nosotros!</h1>
        <div className='flex flex-col gap-4 w-full md:w-7/12 sm:w-8/12'>
          <input onChange={handleFields} name='name' className='border border-zinc-300 rounded-md py-1.5 px-4 shadow-gray-300 shadow-md'
            type="text" placeholder='Nombre y apellido' />
          <input onChange={handleFields} name='email' className='border border-zinc-300 rounded-md py-1.5 px-4 shadow-gray-300 shadow-md'
            type="text" placeholder='Email' />
          <textarea onChange={handleFields} name='message' className='border border-zinc-300 rounded-md py-1.5 px-4 h-24 shadow-gray-300 shadow-md'
            type="text" placeholder='Escribe tu consulta...' />
        </div>
        <button onClick={handleSubmit} className='self-start py-1.5 px-3 rounded-xl font-semibold	text-white bg-blue-700'>Enviar consulta</button>
        <button onClick={() => navigate('/')} className='self-start py-1.5 px-3 rounded-xl font-semibold shadow-gray-400 shadow-md border border-black'>Ir a Inicio</button>
      </div>
    </div>
  )
}

export default Contacts



