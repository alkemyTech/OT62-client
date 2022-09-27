import React from "react";
import BackofficeMocks from "../../mocks/backofficeMocks";
import BackofficeCards from '../../Components/Cards/Card';
import { useLocation } from "react-router-dom";

const BackofficeHeader = () => {
    const location = useLocation();

    return (
        location.pathname === '/backoffice' ? (
            ''
        ) : (
            <div className="flex flex-wrap justify-center gap-4 mt-3">
                {BackofficeMocks.map((value, index) => {
                    return (
                        <BackofficeCards element={value} title='backoffice-min' size='24' index={index} />
                    )
                })}
            </div>
        )

    )
}

export default BackofficeHeader;