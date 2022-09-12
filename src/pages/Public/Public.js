import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsList from '../../Components/News/NewsList';

const Public = () => {
    return (
        <>
            {/* Header */}
            <Routes>
                <Route path="/" element={<h1>Public Routes</h1>}/>
                <Route path="/news" element={<NewsList />}/>
            </Routes>
            {/* Footer */}
        </>
    );
};

export default Public;