import React from 'react';
import Loader from '../Loader/Loader';
import Card from '../Cards/Card';

const DataList = ({ data, loading, type, title }) => {
    
    return (
        <div className="flex flex-wrap gap-6 justify-center min-h-[100px]">
            { !loading ? (
              data.length ? (
                data.map((element) => (
                  <div className="flex flex-row relative justify-center first:gap-0 min" key={element.id}>
                    <Card element={element} title={type} />
                  </div>
                ))) : (
                  <p className='bg-yellow-200 p-1 pr-16 pl-16 font-semibold text-yellow-700 shadow-2xl text-center m-auto'>{`No hay ${title}`}</p>
                )
              ) : (
                <Loader />
              )
            }
          </div>
    );
}
 
export default DataList;