import React, { useEffect, useState } from 'react';
import NewsCard from '../../../Components/Cards/Card.js';
import activitiesAPI from '.././../../shared/APICalls';

const News = () => {
    const [ activities, setActivities ] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const res = await activitiesAPI.get('/activities')
            setActivities(res.data.activities)
        }
        getNews();
    }, []);

    return (
        <div className='min-h-full m-auto'>
            <h1 className='font-bold text-4xl mb-[54px] mt-[54px] text-center'>Actividades</h1>
            <div className='flex m-auto mb-[54px]'>
                <ul className="flex flex-wrap gap-4 w-full justify-center">
                    {activities.length > 0 ? 
                        activities.map((element) => {
                            return <NewsCard element={element} title={'activity'}/>
                        })
                    :
                        <p className='bg-yellow-200 p-1 pr-16 pl-16 font-semibold text-yellow-700 shadow-2xl'>No hay actividades</p>
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default News;