import React from "react";
import Table from '../../../Components/Table/Table';
import newsData from '../../../mocks/newsMock';

const NewsBackoffice = () => {
    return (
        <>
            <Table 
                title='Novedades' 
                tableHeader={['Nombre', 'Imagen']} 
                tableData={newsData} 
                requiredProperties={['name', 'image', 'createdAt']} 
                buttons={[
                    { type: 'Editar', handler: handleEdit},
                    { type: 'Eliminar', handler: handleDelete }
                ]}
            />
            <button className='px-2.5 py-1 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center mb-16' onClick={handleCreate}>Agregar Novedad</button>
        </>
    )
}

const handleEdit = () => {
    console.log('edit')
}

const handleDelete = () => {
    console.log('delete')
}

const handleCreate = () => {
    console.log('create')
}

export default NewsBackoffice;