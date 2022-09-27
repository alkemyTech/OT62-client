import React from 'react';
import Loader from '../Loader/Loader';
import TestimonialCard from '../Cards/Card';

const TestimonialsList = ({ testimonials, loading }) => {
    
    return (
        <div className="flex flex-wrap gap-6 justify-center">
            { !loading ? (
              testimonials.length ? (
                testimonials.map((news) => (
                  <div className="flex flex-row relative justify-center first:gap-0" key={news.id}>
                    <TestimonialCard element={testimonials} title='testimonial' />
                  </div>
                ))) : (
                  <p className='bg-yellow-200 p-1 pr-16 pl-16 font-semibold text-yellow-700 shadow-2xl'>No hay novedades</p>
                )
              ) : (
                <Loader />
              )
            }
          </div>
    );
}
 
export default TestimonialsList;