import { useEffect, useState } from "react";
import Table from '../../../Components/Table/Table';
import { Routes, Route, useNavigate } from "react-router-dom";
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import APICalls from "../../../shared/APICalls";

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
        await APICalls.delete(`/news/${values.id}`)
    }
    return (
        <Routes>
            <Route path="/" element={
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
                    <button className='bg-blue-500 hover:bg-blue-400 pt-4 pb-4 pl-8 pr-8 shadow-xl text-white font-semibold flex m-auto' onClick={handleCreate}>Agregar Novedad</button>
                </>
            } />
            <Route path='/create' element={<BackofficeForm />} />
            <Route path='/edit' element={<BackofficeForm />} />
        </Routes>
    )
}

export default NewsBackoffice;