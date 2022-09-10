import React from 'react';
import NewsCard from './NewsCard';
import news from '../../mocks/newsMock';

const NewsList = () => {
    return (
        <div className='min-h-full'>
            <h1 className='font-bold text-4xl mb-4'>Novedades</h1>
            <div className='flex w-3/4 m-auto'>
                <ul className="flex flex-wrap gap-4 w-full justify-center">
                    {news.length > 0 ? 
                        news.map((element) => {
                            return <NewsCard element={element}/>
                        })
                    :
                        <p className='bg-yellow-200 p-1 pr-16 pl-16 font-semibold text-yellow-700 shadow-2xl'>No hay novedades</p>
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default NewsList;