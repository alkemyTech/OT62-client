import React from "react";
import { Routes, Route } from "react-router-dom";

const Public = () => {
    return (
        <>
            {/* Header */}
            <Routes>
                <Route path="/" element={<h1>Public Routes</h1>}/>
                {/* public routes */}
            </Routes>
            {/* Footer */}
        </>
    );
};

export default Public;