import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import Table from "../../../Components/Table/Table";
import APICalls from "../../../shared/APICalls";
import { usersFieldData } from '../../../data/formsData';
import * as Yup from "yup";

const Users = () => {
    const [ usersData, setUsers ] = useState({});
    const navigate = useNavigate();

    const SUPPORTED_FORMATS = 'data:image'

    const validation = Yup.object({
        firstName: Yup.string().required("Obligatorio"),
        lastName: Yup.string().required("Obligatorio"),
        email: Yup.string().required("Obligatorio"),
        image: Yup.mixed()
    .test(
        'fileFormat',
        'Solo se aceptan formatos JPG, JPEG, GIF y PNG',
        (value) =>  (value && SUPPORTED_FORMATS.includes(value.slice(0,10)))
    )
    })

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
                        tableHeader={['Nombre', 'Segundo Nombre', 'Email', /*'Imagen',*/ 'Rol']} 
                        tableData={usersData} 
                        requiredProperties={['firstName', 'lastName' ,'email', /*'image',*/ 'roleId', 'createdAt']} 
                        buttons={[
                            { type: 'Editar', handler: handleEdit}
                    ]}
                    />
                </>
            }/>
            <Route path='/edit' element={<BackofficeForm validation={validation}/>} />
        </Routes>
    )
}

export default Users;