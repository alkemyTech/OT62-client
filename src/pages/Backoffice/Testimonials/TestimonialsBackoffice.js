import React, { useEffect, useState } from "react";
import Table from '../../../Components/Table/Table';
import { Routes, Route, useNavigate } from "react-router-dom";
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import APICalls from "../../../shared/APICalls";

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
    await APICalls.delete(`/testimonials/${values.id}`)
  }
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Table
            title='testimonios'
            tableHeader={['Nombre', 'Contenido']}
            tableData={testimonials}
            requiredProperties={['name', 'content', 'createdAt']}
            buttons={[
              { type: 'Editar', handler: handleEdit },
              { type: 'Eliminar', handler: handleDelete }
            ]}
          />
          <button className='bg-blue-500 hover:bg-blue-400 pt-4 pb-4 pl-8 pr-8 shadow-xl text-white font-semibold flex m-auto' onClick={handleCreate}>Agregar testimonio</button>
        </>
      } />
      <Route path='/create' element={<BackofficeForm />} />
      <Route path='/edit' element={<BackofficeForm />} />
    </Routes>
  )
}

export default TestimonialsBackoffice;