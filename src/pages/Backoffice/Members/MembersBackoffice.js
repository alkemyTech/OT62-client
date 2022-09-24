import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Table from '../../../Components/Table/Table';
import MembersAPI from '../../../shared/APICalls';
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import { membersFieldData } from '../../../data/formsData';
import { deleteSweetAlert } from '../../../Components/utils/sweetAlerts';

const MembersBackoffice = () => {
    const [ Members, setMembers ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getMembers = async () => {
            const res = await MembersAPI.get('/members')
            setMembers(res.data.data)
        }
        getMembers();
    }, []);

    const handleEdit = (data) => {
        navigate('edit', {
            state: {
                fields: membersFieldData,
                data,
                method: 'PUT',
                route: 'members',
                title: 'Editar miembro'
            }
        })
    }
    
    const handleDelete = async (values) => {
        deleteSweetAlert(values, 'members')
    }
    
    const handleCreate = () => {
        navigate('create', {
            state: {
                fields: membersFieldData,
                method: 'POST',
                route: 'members',
                title: 'Crear miembro'
            }
        })
    }

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Table 
                        title='Miembros' 
                        tableHeader={['Nombre', 'Rol']} 
                        tableData={Members} 
                        requiredProperties={['name', 'rol' ,'createdAt']} 
                        buttons={[
                            { type: 'Editar', handler: handleEdit},
                            { type: 'Eliminar', handler: handleDelete }
                    ]}
                    />
                    <button className='px-6 py-2 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center text-sm shadow-lg mb-16' onClick={handleCreate}>Agregar miembro</button>
                </>
            }/>
            <Route path='/create' element={<BackofficeForm />} />
            <Route path='/edit' element={<BackofficeForm />} />
        </Routes>
    )
}

export default MembersBackoffice;