import React from "react";
import BackofficeCards from '../../../Components/Cards/Card';
import BackofficeMocks from '../../../mocks/backofficeMocks';

const BackofficeLayout = () => {

    return (
        <div className="flex flex-wrap gap-4 justify-center w-1/2 self-center my-8">
            {BackofficeMocks.map((card, index) => (
                <BackofficeCards element={card} title='backoffice' size='48' index={index}/>
            ))}
        </div>
    )
}

export default BackofficeLayout;