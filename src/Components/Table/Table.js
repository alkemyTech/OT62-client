import React from "react";

const Table = ({title, tableHeader, tableData, requiredProperties, buttons}) => {

    return (
        <div className='flex flex-col justify-center'>
            <h1 className='mt-[56px] mb-[56px] text-4xl text-center'>{`Administrar ${title}`}</h1>
            {tableData.length > 0 ? (
                <table className='w-3/4 self-center mb-[56px]'>
                    <thead className='font-semibold bg-slate-400'>
                        <tr>
                            {headerGenerate(tableHeader)}
                        </tr>
                    </thead>
                    <tbody>
                        {bodyGenerate(tableData, requiredProperties, buttons)}
                    </tbody>
                </table>
            ) : (
                <p className='flex bg-yellow-200 p-1 pr-16 pl-16 font-semibold text-yellow-700 shadow-2xl w-fit m-auto mt-0 mb-0'>{`No hay ${title}`}</p>
            )}
        </div>
    )
};

const headerGenerate = (tableHeader) => {
    return (
        <>
            {tableHeader.map(head => {
                return <th key={head} className='border-collapse border border-slate-500 p-3 text-center'>{head}</th>
            })}
            <th className='border-collapse border border-slate-500 p-3 text-center'>Fecha</th>
            <th className='border-collapse border border-slate-500 p-3 text-center'>Acciones</th>
        </>
    )
}

const bodyGenerate = (tableData, requiredProperties, buttons) => {
    return (
        <>
            {tableData.map(row => {
                return (
                    <tr key={row.property} className='border-collapse border border-slate-500 p-3 text-center'>
                        {Object.entries(row).map(([property, value]) => {
                            const dateProperty = property === 'createdAt';
                            if(verifyRequiredProperties(requiredProperties, property)) {
                                return (
                                    <td className='border-collapse border border-slate-500 p-3'>
                                        {dateProperty ? (
                                            new Date(value).toLocaleDateString()
                                        ) : (
                                            value
                                        )
                                    }
                                    </td>
                                )
                            }
                        })}
                        <td className='border-collapse border border-slate-500 p-3'>
                        {buttons.map(({ type, handler }) => (
                            <button className={`${type === 'Editar' ? 'bg-blue-500 hover:bg-blue-400' : 'bg-red-500 hover:bg-red-400'} w-full m-1 font-semibold text-white`} key={type} onClick={() => handler(row)}>
                                {type}
                            </button>
                        ))}
                        </td>
                    </tr>
                )
            })}
        </>
    )
}

const verifyRequiredProperties = (requiredProperties, property) => {
    return requiredProperties.includes(property);
};

export default Table;