import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsList from '../../Components/News/NewsList';
import NewsDetail from '../../Components/News/NewsDetail';
import Contacts from './Contacts';
import Nosotros from './Nosotros';
import ActivityDetail from "../../Components/Activities/ActivityDetail";

const Public = () => {
    return (
        <>
            {/* Header */}
            <Routes>
                <Route path="/" element={<h1>Public Routes</h1>}/>
                <Route path="/news" element={<NewsList />}/>
                <Route path="/news/:id" element={<NewsDetail />}/>
                <Route path="/actividades/:id" element={<ActivityDetail />}/>
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/nosotros' element={<Nosotros />} />
            </Routes>
            {/* Footer */}
        </>
    );
};

export default Public;