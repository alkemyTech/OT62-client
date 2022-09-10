import React from "react";

const Table = ({title, tableHeader, tableData, requiredProperties, buttons}) => {

    return (
        <div className="flex flex-col justify-center">
            <h1 className="mt-[56px] mb-[56px] text-4xl">{`Administrar ${title}`}</h1>
            <table className='w-3/4 self-center'>
                <thead className="font-semibold">
                    {headerGenerate(tableHeader)}
                </thead>
                <tbody>
                    {bodyGenerate(tableData, requiredProperties, buttons)}
                </tbody>
            </table>
        </div>
    )
};

const headerGenerate = (tableHeader) => {
    return (
        <>
            {tableHeader.map(head => {
                return <td >{head}</td>
            })}
            <td >Fecha</td>
            <td >Acciones</td>
        </>
    )
}

const bodyGenerate = (tableData, requiredProperties, buttons) => {
    return (
        <>
            {tableData.map(row => {
                return (
                    <tr>
                        {Object.entries(row).map(([property, value]) => {
                            const dateProperty = property === 'createdAt';
                            if(verifyRequiredProperties(requiredProperties, property)) {
                                return (
                                    <td>
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
                        <td>
                        {buttons.map(({ type, handler, className }) => (
                            <button key={type} onClick={() => handler(handler)}>
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