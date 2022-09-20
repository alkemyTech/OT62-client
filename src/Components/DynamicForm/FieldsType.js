import { Field, ErrorMessage, useFormikContext } from "formik";
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

const ImageField = ({ handleChange, value, values }) => {
    const { setFieldValue } = useFormikContext();
    
    return (
        <>
            <div className="w-3/5 border border-solid rounded-lg border-gray-400 mb-6 mr-8 h-56 relative p-2">
                <input className="w-full h-full z-10 absolute opacity-0 hover:cursor-pointer" type='file' name={value[0]} onChange={(e) => {
                    const imagen = e.target.files[0]
                    const img = document.getElementById('imgPreview')
                    const reader = new FileReader()
                    reader.onload = function(e) {
                        img.src = e.target.result
                    }
                    setFieldValue('image', reader.readAsDataURL(imagen))
                }}/>
                <div className='w-full h-full'>
                    <img id="imgPreview" src={values.image} alt={values.text} className='w-full h-full object-cover rounded-lg'/>
                </div>
            </div>
        </>
    )
}

export { TextField, ContentField, ImageField };