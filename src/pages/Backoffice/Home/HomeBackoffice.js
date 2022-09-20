import React, { useEffect, useState } from "react";
import BackofficeForm from "../../../Components/DynamicForm/BackofficeForm";
import APICalls from "../../../shared/APICalls";
import * as Yup from "yup";

const HomeBackoffice = () => {
    const [ homeData, setHomeData ] = useState({})
    const validation = Yup.object({
        welcomeText: Yup.string().required("Obligatorio").min(20, "Texto de bienvenida demasiado corto - debe de contener al menos 20 caracteres."),
    })

    useEffect(() => {
        const gethome = async () => {
            const res = await APICalls.get('/organization')
            const requiredData = {
                id: res.data.data.organization.id,
                welcomeText: res.data.data.organization.welcomeText
            }
            setHomeData(requiredData)
        }
        gethome();
    }, [])

    if(JSON.stringify(homeData) === '{}') {
        return (
            <p>Ha ocurrido un error</p>
        )
    }else {
        return (
            <BackofficeForm fields={homeData} method='PUT' route='organization' title='Editar home' validation={validation}/>
        )
    }
}

export default HomeBackoffice;