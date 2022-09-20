import React from 'react'
import Table from '../../../Components/Table/Table'
import { contactsMock } from '../../../mocks/contactsMock'

const ContactsBackoffice = () => {
  const handleEdit = () => {
    console.log('edit')
  }

  const handleDelete = () => {
    console.log('delete')
  }
  const handleCreate = () => {
    console.log('create')
  }
  return (
    <>
      <Table
        title='Contactos'
        tableHeader={['Name', 'Phone', 'Email']}
        tableData={contactsMock}
        requiredProperties={['name', 'email', 'phone', 'createdAt']}
        buttons={[
          { type: 'Editar', handler: handleEdit },
          { type: 'Eliminar', handler: handleDelete }
        ]}
      />
      <button className='px-2.5 py-1 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center mb-16' onClick={handleCreate}>Agregar Contacto</button>
    </>
  )
}

export default ContactsBackoffice