import React, { useEffect, useState } from 'react';
import NewsCard from '../../../Components/Cards/Card.js';
import newsAPI from '.././../../shared/APICalls';

const News = () => {
    const [ news, setNews ] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const res = await newsAPI.get('/news')
            setNews(res.data.allNews)
        }
        getNews();
    }, []);

    return (
        <div className='min-h-full m-auto'>
            <h1 className='font-bold text-4xl mb-[54px] mt-[54px] text-center'>Novedades</h1>
            <div className='flex m-auto mb-[54px]'>
                <ul className="flex flex-wrap gap-4 w-full justify-center">
                    {news.length > 0 ? 
                        news.map((element) => {
                            return <NewsCard element={element} title={'new'}/>
                        })
                    :
                        <p className='bg-yellow-200 p-1 pr-16 pl-16 font-semibold text-yellow-700 shadow-2xl'>No hay novedades</p>
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default News;