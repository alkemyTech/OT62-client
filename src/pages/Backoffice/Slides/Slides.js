import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import Table from "../../../Components/Table/Table";
import APICalls from "../../../shared/APICalls";
import { slidesFieldData } from '../../../data/formsData';
import * as Yup from "yup";

const Slides = () => {
    const [ slidesData, setSlides ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const getSlides = async () => {
            const res = await APICalls.get('/slides')
            setSlides(res.data.slides)
        }
        getSlides();
    }, [])

    const handleEdit = (data) => {
        navigate('edit', {
            state: {
                fields: slidesFieldData,
                data,
                method: 'PUT',
                route: 'slides',
                title: 'Editar slide'
            }
        })
    }

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Table 
                        title='Slides' 
                        tableHeader={['Imagen', 'Titulo']} 
                        tableData={slidesData} 
                        requiredProperties={['image', 'text' ,'createdAt']} 
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

export default Slides;