import React from 'react'
import { Link } from 'react-router-dom';
// import Slider from '../../Campaigns/School/Slider';

function NewsDetail(props) {
    return (
        <>
            {/* <Slider/> */}
            <div className='w-1/2 flex justify-center flex-col m-auto'>
                <h2 className='my-3 font-bold'>{props.name}</h2>
                <p>{props.description}</p>
            </div>
            <button className='my-3 w-1/2 flex justify-center flex-col m-auto'>
                <Link to="/contribuir" className="bg-red-500 p-2 rounded-xl text-white">Ir al inicio</Link>
            </button>

        </>
    );
}

export default NewsDetail