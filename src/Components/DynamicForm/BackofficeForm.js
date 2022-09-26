import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import valueTranslate from "../utils/valueTranslate";
import { ContentField, TextField, ImageField, CheckboxField } from "./FieldsType";
import { postSweetAlert, putSweetAlert } from "../utils/sweetAlerts";

const BackofficeForm = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    if (location.state) {
        var { fields, method, route, title, validation, path, prevRoute } = location.state;
        if (location.state.data) {
            var data = location.state.data;
        }
    } else if (props) {
        var { fields, method, route, title, validation, path, hidden } = props;
        var data = fields;
    }
    
    const onSubmit = async (values) => {
        switch (method) {
            case 'POST':
                postSweetAlert(values, route, prevRoute)
                break;
                case 'PUT':
                putSweetAlert(values, route, prevRoute)
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
                validationSchema={validation ? validation : props.validation}
            >
                {({ handleChange, handleSubmit, values, errors}) => (
                    <div className="flex justify-center h-full">
                        <Form onSubmit={handleSubmit} className="flex flex-col w-3/4 items-center p-6 border-[1px] shadow-lg m-7">
                            <h1 className="text-3xl mb-4 font-semibold">{title}</h1>
                            {Object?.entries(fields)?.map((value, index) => {
                                return (
                                    <>
                                        <label key={index} className={`${hidden ? 'hidden' : 'block'} font-semibold mb-1`}>{valueTranslate(value, 'label')}</label>
                                        {generateInputs(value, handleChange, values, hidden)}
                                    </>
                                )
                            })}
                            <div className="flex flex-wrap gap-2 mt-6">
                                <button type='submit' className="px-6 py-2 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center text-sm shadow-lg">Aceptar</button>
                                <button type="button" className="px-6 py-2 w-fit text-black border rounded-lg self-center hover:bg-slate-300 text-sm shadow-lg border-slate-800" onClick={() => navigate(`${path ? path : `/backoffice/${route}`}`)}>Cancelar</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
};

export const generateInputs = (value, handleChange, values, hidden) => {
    switch (value[0]) {
        case 'title':
        case 'firstName':
        case 'lastName':
        case 'email':
        case 'rol':
        case 'phone':
            return (
                <TextField value={value} handleChange={handleChange} key={value[0]}/>
            )
        case 'name':
            return (
                <TextField value={value} handleChange={handleChange} key={value[0]}/>
            )
        case 'text':
            return (
                <TextField value={value} handleChange={handleChange} key={value[0]} />
            )
        case 'content':
        case 'message':
            return (
                <ContentField value={value} handleChange={handleChange} key={value[0]} />
            )
        case 'description':
            return (
                <ContentField value={value} handleChange={handleChange} key={value[0]} />
            )
        case 'category':
            return (
                <TextField value={value} handleChange={handleChange} key={value[0]} />
            )
        case 'welcomeText':
            return (
                <ContentField value={value} handleChange={handleChange} key={value[0]} />
            )
        case 'image':
            return (
                <ImageField value={value} key={value[0]} values={values} hidden={hidden} />
            )
        case 'roleId':
            return (
                <CheckboxField value={value} key={value[0]} values={values} handleChange={handleChange} />
            )
        default:
            break;
    }
}

export default BackofficeForm;