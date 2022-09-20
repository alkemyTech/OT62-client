import { useNavigate } from 'react-router-dom';
import APICalls from '../../../shared/APICalls';
import * as Yup from "yup";
import DynamicForm from '../../../Components/DynamicForm/DynamicForm';
import { contactsData } from '../../../data/formsData';
import { Formik } from 'formik';

const Contacts = () => {
  const navigate = useNavigate()
  

  return (
    <Formik
      initialValues ={{
        name: '',
        email: '',
        message: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        message: Yup.string().required("Required")
      })}
      onSubmit = { async (values) => {
        await APICalls.post('/contacts', values);
        alert("Muchas gracias, hemos recibido su mensaje!");
      }}
    >
      <div className='flex flex-col gap-4 w-10/12 my-7 mx-auto items-center self-center'>
        <h1 className='text-2xl font-semibold text-center sm:text-start'>¿Quieres Contribuir?</h1>
        <button onClick={() => navigate('/testimonials-create')} className='my-2 px-2.5 py-1 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700'>Dejanos tu testimonio</button>
        <div className='flex flex-col gap-4 w-full items-center'>
          <h1 className='text-2xl font-semibold text-center sm:text-start'>¡Contactate con nosotros!</h1>
          <DynamicForm buttonName="Enviar mensaje" data={contactsData} />
          <button onClick={() => navigate('/')} className='py-1.5 px-3 rounded-xl font-semibold shadow-gray-400 shadow-md border border-black hover:bg-gray-100'>Ir a Inicio</button>
        </div>
      </div>
    </Formik>
  )
}

export default Contacts



