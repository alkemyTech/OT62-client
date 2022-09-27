import React, { useEffect, useState } from 'react';
import DataList from '../../../Components/DataList/DataList.js';
import activitiesAPI from '.././../../shared/APICalls';

const Activities = () => {
    const [ activities, setActivities ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const getNews = async () => {
            try {
                const res = await activitiesAPI.get('/activities')
                setActivities(res.data.activities)
            } catch (error) {
                console.log(error)
            }finally {
                setTimeout(function(){
                    setLoading(false)
                }, 500);
            }
        }
        getNews();
    }, []);

    return (
        <div className='min-h-full m-auto my-[56px] p-6'>
            <h1 className='font-bold text-4xl mb-[54px] mt-[54px] text-center'>Actividades</h1>
            <DataList data={activities} loading={loading} type='activity' title='actividades'/>
        </div>
    );
}
 
export default Activities;