import { useNavigate } from 'react-router-dom';
import APICalls from '../../../shared/APICalls';
import * as Yup from "yup";
import DynamicForm from '../../../Components/DynamicForm/DynamicForm';
import { testimonialsData } from '../../../data/formsData';
import { Formik } from 'formik';
import Swal from 'sweetalert2';

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
        content: Yup.string().required("Obligatorio")
      })}
      onSubmit = { async (values) => {
        try {
          await APICalls.post('/testimonials', values);
          Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Testimonio creado con exito',
            showConfirmButton: false,
            timer: 1500
          })
        } catch (error) {
          Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'Ha ocurrido un error',
            showConfirmButton: false,
            timer: 1500
          })
        }
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



