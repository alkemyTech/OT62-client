import { useEffect, useState } from "react";
import Table from '../../../Components/Table/Table';
import { Routes, Route, useNavigate } from "react-router-dom";
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import APICalls from "../../../shared/APICalls";
import { deleteSweetAlert } from "../../../Components/utils/sweetAlerts";

const NewsBackoffice = () => {

    const [news, setNews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getNews = async () => {
        const res = await APICalls.get('/news')
        const { data } = res
        const { allNews } = data
        setNews(allNews)
        }
        getNews();
    }, [])

    const newsData = {
        name: '',
        image: '',
        content: '',
        category: ''
    }

    const handleCreate = () => {
        navigate('create', {
        state: {
            fields: newsData,
            method: 'POST',
            route: 'news',
            title: 'Crear Novedad'
        }
        })
    }
    const handleEdit = (data) => {
        navigate('edit', {
        state: {
            fields: newsData,
            data,
            method: 'PUT',
            route: 'news',
            title: 'Editar Novedad'
        }
        })
    }
    const handleDelete = async (values) => {
        deleteSweetAlert(values, 'news')
    }
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Table 
                        title='Novedades' 
                        tableHeader={['Nombre', 'Imagen']} 
                        tableData={news} 
                        requiredProperties={['name', 'image', 'createdAt']} 
                        buttons={[
                            { type: 'Editar', handler: handleEdit},
                            { type: 'Eliminar', handler: handleDelete }
                        ]}
                    />
                    <button className='px-2.5 py-1 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center mb-16' onClick={handleCreate}>Agregar Novedad</button>
                </>
            } />
            <Route path='/create' element={<BackofficeForm />} />
            <Route path='/edit' element={<BackofficeForm />} />
        </Routes>
    )
}

export default NewsBackoffice;