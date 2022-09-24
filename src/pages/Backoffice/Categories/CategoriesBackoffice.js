import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Table from '../../../Components/Table/Table';
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import { categoriesFieldData } from '../../../data/formsData';
import APICalls from "../../../shared/APICalls";
import { deleteSweetAlert } from "../../../Components/utils/sweetAlerts";
import * as Yup from "yup";

const CategoriesBackOffice = () => {
    const [ categories, setCategories ] = useState([]);
    const navigate = useNavigate();
    
    const validation = Yup.object({
        name: Yup.string().required("Obligatorio"),
        description: Yup.string().required("Obligatorio")
    })

    useEffect(() => {
        const getCategories = async () => {
            const res = await APICalls.get('/categories')
            setCategories(res.data.data)
        }
        getCategories();
    }, []);

    const handleEdit = (data) => {
        navigate('edit', {
            state: {
                fields: categoriesFieldData,
                data,
                method: 'PUT',
                route: 'categories',
                title: 'Editar categoría'
            }
        })
    }
    
    const handleDelete = async (values) => {
        deleteSweetAlert(values, 'categories')
    }
    
    const handleCreate = () => {
        navigate('create', {
            state: {
                fields: categoriesFieldData,
                method: 'POST',
                route: 'categories',
                title: 'Crear categoría'
            }
        })
    }

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Table 
                        title='Categorías' 
                        tableHeader={['Nombre', "Decripción"]} 
                        tableData={categories} 
                        requiredProperties={['name', 'description' ,'createdAt']} 
                        buttons={[
                            { type: 'Editar', handler: handleEdit},
                            { type: 'Eliminar', handler: handleDelete }
                    ]}
                    />
                    <button className='px-6 py-2 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center text-sm shadow-lg mb-16' onClick={handleCreate}>Agregar Categoría</button>
                </>
            }/>
            <Route path='/create' element={<BackofficeForm validation={validation}/>} />
            <Route path='/edit' element={<BackofficeForm validation={validation}/>} />
        </Routes>
    )
}

export default CategoriesBackOffice;