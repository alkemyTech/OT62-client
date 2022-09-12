import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const Public = () => {
    return (
        <>
            {/* Header */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* public routes */}
            </Routes>
            {/* Footer */}
        </>
    );
};

export default Public;