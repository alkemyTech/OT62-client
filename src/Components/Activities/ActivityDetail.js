import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import activityAPI from '../../shared/APICalls';

const ActivityDetail = () => {
    const [ activity , setActivity ] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const getNew = async () => {
            const res = await activityAPI.get(`/activities/${id}`)
            setActivity(res.data.activity)
        }
        getNew();
    }, [id]);

    return (
        <>
             <div className='w-full flex flex-col sm:flex-row'>
                <div>
                    <img src={activity.image} alt="img" className='w-full object-cover h-full'/>
                </div>
                <div className='w-1/2 flex justify-center flex-col text-center m-auto my-3'>
                    <h2 className='my-2 font-bold text-2xl'>{activity.name}</h2>
                    <p className='my-4 md:px-6'>{activity.content}</p>
                    <button className='flex items-center justify-center my-2'>
                        <Link to="/" className="bg-red-500 p-2 rounded-xl text-white">Ir al inicio</Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ActivityDetail