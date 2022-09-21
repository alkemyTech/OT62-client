import React, { useEffect, useState } from "react";
import Table from '../../../Components/Table/Table';
import { Routes, Route, useNavigate } from "react-router-dom";
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import APICalls from "../../../shared/APICalls";
import { deleteSweetAlert } from "../../../Components/utils/sweetAlerts";

const TestimonialsBackoffice = () => {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTestimonials = async () => {
      const res = await APICalls.get('/testimonials')
      const { data } = res
      const { allTestimonials } = data
      setTestimonials(allTestimonials)
    }
    getTestimonials();
  }, [])

  const testimonialsData = {
    name: '',
    content: '',
    image: ''
  }
  const handleCreate = () => {
    navigate('create', {
      state: {
        fields: testimonialsData,
        method: 'POST',
        route: 'testimonials',
        title: 'Crear Testimonial'
      }
    })
  }
  const handleEdit = (data) => {
    navigate('edit', {
      state: {
        fields: testimonialsData,
        data,
        method: 'PUT',
        route: 'testimonials',
        title: 'Editar Testimonial'
      }
    })
  }
  const handleDelete = async (values) => {
    deleteSweetAlert(values, 'testimonials')
  }
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Table
            title='Testimonios'
            tableHeader={['Nombre', 'Contenido']}
            tableData={testimonials}
            requiredProperties={['name', 'content', 'createdAt']}
            buttons={[
              { type: 'Editar', handler: handleEdit },
              { type: 'Eliminar', handler: handleDelete }
            ]}
          />
          <button className='px-2.5 py-1 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center mb-16' onClick={handleCreate}>Agregar testimonio</button>
        </>
      } />
      <Route path='/create' element={<BackofficeForm />} />
      <Route path='/edit' element={<BackofficeForm />} />
    </Routes>
  )
}

export default TestimonialsBackoffice;