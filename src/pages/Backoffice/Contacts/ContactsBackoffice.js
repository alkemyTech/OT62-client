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
      <button className='bg-blue-500 hover:bg-blue-400 pt-4 pb-4 pl-8 pr-8 shadow-xl text-white font-semibold flex m-auto' onClick={handleCreate}>Agregar Contacto</button>
    </>
  )
}

export default ContactsBackoffice