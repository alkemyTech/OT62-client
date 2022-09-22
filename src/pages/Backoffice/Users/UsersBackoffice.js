import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import Table from "../../../Components/Table/Table";
import APICalls from "../../../shared/APICalls";
import { usersFieldData } from '../../../data/formsData';

const Users = () => {
    const [ usersData, setUsers ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const getUsers = async () => {
            const res = await APICalls.get('/users')
            setUsers(res.data.users)
        }
        getUsers();
    }, [])

    const handleEdit = (data) => {
        navigate('edit', {
            state: {
                fields: usersFieldData,
                data,
                method: 'PUT',
                route: 'users',
                title: 'Editar usuario'
            }
        })
    }

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Table 
                        title='Usuarios' 
                        tableHeader={['Nombre', 'Segundo Nombre', 'Email', 'Imagen', 'Rol']} 
                        tableData={usersData} 
                        requiredProperties={['firstName', 'lastName' ,'email', 'image', 'roleId', 'createdAt']} 
                        buttons={[
                            { type: 'Editar', handler: handleEdit}
                    ]}
                    />
                </>
            }/>
            <Route path='/edit' element={<BackofficeForm />} />
        </Routes>
    )
}

export default Users;