import React from "react";

const Table = ({title, tableHeader, tableData, requiredProperties, buttons}) => {

    return (
        <div className='flex flex-col justify-center min-h-screen'>
            <h1 className='mt-[56px] mb-[56px] text-4xl'>{`Administrar ${title}`}</h1>
            {tableData.length > 0 ? (
                <table className='w-3/4 self-center mb-[56px]'>
                    <thead className='font-semibold bg-slate-400'>
                        {headerGenerate(tableHeader)}
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
                return <td className='border-collapse border border-slate-500 p-3'>{head}</td>
            })}
            <td className='border-collapse border border-slate-500 p-3'>Fecha</td>
            <td className='border-collapse border border-slate-500 p-3'>Acciones</td>
        </>
    )
}

const bodyGenerate = (tableData, requiredProperties, buttons) => {
    return (
        <>
            {tableData.map(row => {
                return (
                    <tr className='border-collapse border border-slate-500 p-3'>
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
                            <button className={`${type === 'Editar' ? 'bg-blue-500 hover:bg-blue-400' : 'bg-red-500 hover:bg-red-400'} w-full m-1 font-semibold text-white`} key={type} onClick={() => handler(handler)}>
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