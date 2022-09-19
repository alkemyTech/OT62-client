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
            <div className='w-full'>
                <img src={activity.image} alt="img" className='w-full h-[500px] object-cover'/>
                <div className='w-1/2 flex justify-center flex-col m-auto mb-10 mt-10'>
                    <h2 className='my-3 font-bold text-2xl'>{activity.name}</h2>
                    <p>{activity.content}</p>
                </div>
                <button className='my-3 w-1/2 flex justify-center flex-col m-auto'>
                    <Link to="/contribuir" className="bg-red-500 p-2 rounded-xl text-white">Ir al inicio</Link>
                </button>
            </div>
        </>
    );
}

export default ActivityDetail