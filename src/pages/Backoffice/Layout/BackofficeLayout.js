import React from "react";
import BackofficeCards from '../../../Components/Cards/Card';
import BackofficeMocks from '../../../mocks/backofficeMocks';

const BackofficeLayout = () => {

    return (
        <div className="flex flex-wrap gap-4 justify-center w-1/2 self-center my-8">
            {BackofficeMocks.map((card) => (
                <BackofficeCards element={card} title='backoffice' />
            ))}
        </div>
    )
}

export default BackofficeLayout;