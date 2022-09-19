import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import newAPI from '../../shared/APICalls';
// import Slider from '../../Campaigns/School/Slider';

const NewsDetail = () => {
    const [ news , setNews ] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getNew = async () => {
            const res = await newAPI.get(`/news/${id}`)
            setNews(res.data.newsDetails)
        }
        getNew();
    }, [id]);

    return (
        <>
            <div className='w-full'>
                <img src={news.image} alt="img" className='w-full h-[500px] object-cover'/>
                <div className='w-1/2 flex justify-center flex-col m-auto'>
                    <h2 className='my-3 font-bold text-2xl'>{news.name}</h2>
                    <p>{news.content}</p>
                </div>
                <button className='my-3 w-1/2 flex justify-center flex-col m-auto'>
                    <Link to="/contribuir" className="bg-red-500 p-2 rounded-xl text-white">Ir al inicio</Link>
                </button>
            </div>

        </>
    );
}

export default NewsDetail