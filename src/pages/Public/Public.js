import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsList from '../../Components/News/NewsList';
import Contacts from './Contacts';
import Nosotros from './Nosotros';

const Public = () => {
    return (
        <>
            {/* Header */}
            <Routes>
                <Route path="/" element={<h1>Public Routes</h1>}/>
                <Route path="/news" element={<NewsList />}/>
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/nosotros' element={<Nosotros />} />
            </Routes>
            {/* Footer */}
        </>
    );
};

export default Public;