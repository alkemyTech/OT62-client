import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import valueTranslate from "../utils/valueTranslate";
import { ContentField, TextField, ImageField } from "./FieldsType";
import { postSweetAlert, putSweetAlert } from "../utils/sweetAlerts";

const BackofficeForm  = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    if(location.state) {
        var {fields, method, route, title, validation, path } = location.state;
        if (location.state.data) {
            var data = location.state.data;
        }
    } else if(props) {
        var {fields, method, route, title, validation, path } = props;
        var data = fields;
    }

    const onSubmit = async (values) => {
        switch (method) {
            case 'POST':
                postSweetAlert(values, route)
                break;
            case 'PUT':
                putSweetAlert(values, route)
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Formik
                initialValues={data ? data : fields}
                onSubmit={onSubmit}
                validationSchema={validation}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <div className="flex justify-center h-full">
                        <Form onSubmit={handleSubmit} className="flex flex-col w-3/4 items-center p-6 border-[1px] shadow-lg m-7">
                            <h1 className="text-3xl mb-4 font-semibold">{title}</h1>
                            {Object?.entries(fields)?.map((value, index) => {
                                return (
                                    <>
                                        <label key={index} className="font-semibold mb-1">{valueTranslate(value, 'label')}</label>
                                        {generateInputs(value, handleChange, values)}
                                    </>
                                )
                            })}
                            <div className="flex flex-wrap gap-2 mt-6">
                                <button type='submit' className="self-center py-1.5 px-2 sm:py-1.5 sm:px-4 border bg-red-600 rounded-3xl text-white">Aceptar</button>
                                <button type="button" className="py-1 px-2 sm:py-1.5 sm:px-4 self-center border-black border rounded-3xl" onClick={() => navigate(`${path ? path : `/backoffice/${route}`}`)}>Cancelar</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
};

const generateInputs = (value, handleChange, values) => {
    switch (value[0]) {
        case 'title':
            return (
                <TextField value={value} handleChange={handleChange} key={value[0]}/>
            )
        case 'name':
            return (
                <TextField value={value} handleChange={handleChange} key={value[0]}/>
            )
        case 'text':
            return (
                <TextField value={value} handleChange={handleChange} key={value[0]}/>
            )
        case 'content':
            return (
                <ContentField value={value} handleChange={handleChange} key={value[0]}/>
            )    
        case 'description':
            return (
                <ContentField value={value} handleChange={handleChange} key={value[0]}/>
            )
        case 'category':
            return (
                <TextField value={value} handleChange={handleChange} key={value[0]}/>
            )    
        case 'welcomeText':
            return (
                <ContentField value={value} handleChange={handleChange} key={value[0]}/>
            )
        case 'image':
            return (
                <ImageField value={value} key={value[0]} values={values}/>
            )
        default:
            break;
    }
}

export default BackofficeForm;