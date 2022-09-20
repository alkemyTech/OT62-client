import { Field, ErrorMessage } from "formik";
import valueTranslate from "../utils/valueTranslate";

const TextField = ({ handleChange, value }) => {
    return (
        <>
            <Field 
                className="w-3/5 border border-solid rounded-lg border-gray-400 mb-6 mr-8 p-2.5"
                id = {value[0]}
                name = {value[0]}
                type = {valueTranslate(value, 'type')}
                placeholder = {valueTranslate(value, 'placeholder')}
                onChange = {handleChange}
            />
            <p className="text-red-400 font-semibold">
                <ErrorMessage name={value[0]}/>
            </p>
        </>
    )
}

const ContentField = ({ handleChange, value }) => {
    return (
        <>
            <Field 
                as= 'textarea'
                className="w-3/5 border border-solid rounded-lg border-gray-400 mb-6 mr-8 p-2.5 h-56"
                id = {value[0]}
                name = {value[0]}
                type = {valueTranslate(value, 'type')}
                placeholder = {valueTranslate(value, 'placeholder')}
                onChange = {handleChange}
            />
            <p className="text-red-400 font-semibold">
                <ErrorMessage name={value[0]}/>
            </p>
        </>
    )
}

export { TextField, ContentField };