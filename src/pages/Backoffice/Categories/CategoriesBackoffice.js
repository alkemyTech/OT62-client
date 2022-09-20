import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Table from '../../../Components/Table/Table';
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import { categoriesFieldData } from '../../../data/formsData';
import APICalls from "../../../shared/APICalls";

const CategoriesBackOffice = () => {
    const [ categories, setCategories ] = useState([]);
    const navigate = useNavigate();

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
        await APICalls.delete(`/categories/${values.id}`)
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
                    <button className='px-2.5 py-1 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center mb-16' onClick={handleCreate}>Agregar Categoría</button>
                </>
            }/>
            <Route path='/create' element={<BackofficeForm />} />
            <Route path='/edit' element={<BackofficeForm />} />
        </Routes>
    )
}

export default CategoriesBackOffice;