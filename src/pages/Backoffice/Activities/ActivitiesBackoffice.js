import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Table from '../../../Components/Table/Table';
import activitiesAPI from '../../../shared/APICalls';
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import { activitiesFieldData } from '../../../data/formsData';
import { deleteSweetAlert } from '../../../Components/utils/sweetAlerts';

const ActivitiesBackoffice = () => {
    const [ activities, setActivities ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getActivities = async () => {
            const res = await activitiesAPI.get('/activities')
            setActivities(res.data.activities)
        }
        getActivities();
    }, []);

    const handleEdit = (data) => {
        navigate('edit', {
            state: {
                fields: activitiesFieldData,
                data,
                method: 'PUT',
                route: 'activities',
                title: 'Editar actividad'
            }
        })
    }
    
    const handleDelete = async (values) => {
        deleteSweetAlert(values, 'activities')
    }
    
    const handleCreate = () => {
        navigate('create', {
            state: {
                fields: activitiesFieldData,
                method: 'POST',
                route: 'activities',
                title: 'Crear actividad'
            }
        })
    }

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Table 
                        title='Actividades' 
                        tableHeader={['Nombre', 'Contenido']} 
                        tableData={activities} 
                        requiredProperties={['name', 'content' ,'createdAt']} 
                        buttons={[
                            { type: 'Editar', handler: handleEdit},
                            { type: 'Eliminar', handler: handleDelete }
                    ]}
                    />
                    <button className='px-2.5 py-1 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center mb-16' onClick={handleCreate}>Agregar Actividad</button>
                </>
            }/>
            <Route path='/create' element={<BackofficeForm />} />
            <Route path='/edit' element={<BackofficeForm />} />
        </Routes>
    )
}

export default ActivitiesBackoffice;