import { useNavigate } from 'react-router-dom';
import APICalls from '../../../shared/APICalls';
import * as Yup from "yup";
import DynamicForm from '../../../Components/DynamicForm/DynamicForm';
import { testimonialsData } from '../../../data/formsData';
import { Formik } from 'formik';

const CreateTestimonial = () => {
  const navigate = useNavigate()
  

  return (
    <Formik
      initialValues ={{
        name: '',
        content: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Obligatorio"),
        message: Yup.string().required("Obligatorio")
      })}
      onSubmit = { async (values) => {
        await APICalls.post('/testimonials', values);
        alert("Muchas gracias, hemos recibido su testimonio!");
      }}
    >
      <div className='flex flex-col gap-4 w-10/12 my-7 mx-auto items-center self-center'>
        <div className='flex flex-col gap-4 w-full items-center'>
          <h1 className='text-2xl font-semibold text-center sm:text-start'>¡Dejanos tu testimonio!</h1>
          <DynamicForm buttonName="Enviar testimonio" data={testimonialsData} />
          <button onClick={() => navigate('/')} className='py-1.5 px-3 rounded-xl font-semibold shadow-gray-400 shadow-md border border-black hover:bg-gray-100'>Ir a Inicio</button>
        </div>
      </div>
    </Formik>
  )
}

export default CreateTestimonial;



