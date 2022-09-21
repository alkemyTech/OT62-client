import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TestimonialsCard from '../../../Components/Cards/Card.js';
import testimonialAPI from '.././../../shared/APICalls';

const Testimonials = () => {
    const [ testimonials, setTestimonials ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getNews = async () => {
            const res = await testimonialAPI.get('/testimonials')
            setTestimonials(res.data.allTestimonials)
        }
        getNews();
    }, []);

    return (
        <div className='min-h-full m-auto'>
            <h1 className='font-bold text-4xl mb-[54px] mt-[54px] text-center'>Testimonios</h1>
            <div className='flex m-auto mb-[54px]'>
                <ul className="flex flex-wrap gap-4 w-full justify-center">
                    {testimonials.length > 0 ? 
                        testimonials.map((element) => {
                            return <TestimonialsCard element={element} title={'testimonial'}/>
                        })
                    :
                        <p className='bg-yellow-200 p-1 pr-16 pl-16 font-semibold text-yellow-700 shadow-2xl'>No hay testimonios</p>
                    }
                </ul>
            </div>
            <div className='flex justify-center'>
                <button onClick={() => navigate('/testimonials-create')} className='my-2 px-2.5 py-1 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700'>Dejanos tu testimonio</button>
            </div>
        </div>
    );
}
 
export default Testimonials;