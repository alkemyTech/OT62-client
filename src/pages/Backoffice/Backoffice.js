import React from "react";
import { Routes, Route } from "react-router-dom";

const Public = () => {
    return (
        <>
            {/* Header */}
            <Routes>
                <Route path="/" element={<h1>Private Routes</h1>}/>
                {/* private routes */}
            </Routes>
            {/* Footer */}
        </>
    );
};

export default Public;