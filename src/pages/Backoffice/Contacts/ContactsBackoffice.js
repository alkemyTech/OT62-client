import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Table from '../../../Components/Table/Table'
import contactsAPI from '../../../shared/APICalls';
import { deleteSweetAlert } from '../../../Components/utils/sweetAlerts';
import { contactsFieldData } from '../../../data/formsData';
import BackofficeForm from '../../../Components/DynamicForm/BackofficeForm';

const ContactsBackoffice = () => {
  const [ contacts, setContacts ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getContacts = async () => {
            const res = await contactsAPI.get('/Contacts')
            setContacts(res.data.data)
        }
        getContacts();
    }, []);

    const handleEdit = (data) => {
        navigate('edit', {
            state: {
                fields: contactsFieldData,
                data,
                method: 'PUT',
                route: 'contacts',
                title: 'Editar contacto'
            }
        })
    }
    
    const handleDelete = async (values) => {
        deleteSweetAlert(values, 'contacts')
    }
    
    const handleCreate = () => {
        navigate('create', {
            state: {
                fields: contactsFieldData,
                method: 'POST',
                route: 'contacts',
                title: 'Crear contacto'
            }
        })
    }


  return (
    <Routes>
      <Route path='/' element={
          <>
            <Table
              title='Contactos'
              tableHeader={['Name', 'Phone', 'Email']}
              tableData={contacts}
              requiredProperties={['name', 'email', 'phone', 'createdAt']}
              buttons={[
                { type: 'Editar', handler: handleEdit },
                { type: 'Eliminar', handler: handleDelete }
              ]}
            />
        </>
      } />
      <Route path='/edit' element={<BackofficeForm />} />
    </Routes>
  )
}

export default ContactsBackoffice