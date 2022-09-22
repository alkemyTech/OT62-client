import { Field, ErrorMessage, useFormikContext } from "formik";
import valueTranslate from "../utils/valueTranslate";
import imageToBase64 from "../../shared/imageToBase64";


const TextField = ({ handleChange, value }) => {
    return (
        <>
            <Field
                className="w-3/5 border border-solid rounded-lg border-gray-400 mr-8 p-2.5"
                id={value[0]}
                name={value[0]}
                type={valueTranslate(value, 'type')}
                placeholder={valueTranslate(value, 'placeholder')}
                onChange={handleChange}
            />
            <p className="text-red-400 font-semibold mb-6">
                <ErrorMessage name={value[0]} />
            </p>
        </>
    )
}

const ContentField = ({ handleChange, value }) => {
    return (
        <>
            <Field
                as='textarea'
                className="w-3/5 border border-solid rounded-lg border-gray-400 mr-8 p-2.5 h-56"
                id={value[0]}
                name={value[0]}
                type={valueTranslate(value, 'type')}
                placeholder={valueTranslate(value, 'placeholder')}
                onChange={handleChange}
            />
            <p className="text-red-400 font-semibold mb-6">
                <ErrorMessage name={value[0]} />
            </p>
        </>
    )
}

const ImageField = ({ handleChange, value, values, hidden }) => {
    const { setFieldValue } = useFormikContext();

    return (
        <>
            <div className={`${hidden ? 'hidden' : 'block'} w-3/5 border border-solid rounded-lg border-gray-400 mb-6 mr-8 h-56 relative p-2`}>
                <input className="w-full h-full z-10 absolute opacity-0 hover:cursor-pointer" accept="image/png, image/jpeg, image/jpg" type='file' name={value[0]} onChange={async (e) => {
                    const image = e.target.files[0]
                    const toBase64 = await imageToBase64(image)
                    const reader = new FileReader()
                    setFieldValue('image', toBase64)
                }} />
                <div className='w-full h-full'>
                    <img id="imgPreview" src={values.image} alt={values.text} className='w-full h-full object-cover rounded-lg' />
                </div>
            </div>
        </>
    )
}

const CheckboxField = ({ handleChange, value, values }) => {
    return (
        <>
            <div className="flex gap-6">
                <div className="flex justify-center items-center gap-2">
                    <input type='checkbox' id="standard"/>
                    <label htmlFor="standard">Standard</label>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <input type='checkbox' id="admin"/>
                    <label htmlFor="admin">Admin</label>
                </div>
            </div>
        </>
    )
}

export { TextField, ContentField, ImageField, CheckboxField };