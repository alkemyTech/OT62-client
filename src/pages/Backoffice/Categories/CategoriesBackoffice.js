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
            console.log(res.data.data);
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
                    <button className='self-center py-1.5 px-2 sm:py-1.5 sm:px-4 border bg-red-600 rounded-3xl text-white mb-10' onClick={handleCreate}>Agregar Categoría</button>
                </>
            }/>
            <Route path='/create' element={<BackofficeForm />} />
            <Route path='/edit' element={<BackofficeForm />} />
        </Routes>
    )
}

export default CategoriesBackOffice;