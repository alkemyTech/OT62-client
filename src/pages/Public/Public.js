import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NewsList from '../../Components/News/NewsList';
import News from './News/News';
import NewsDetail from '../../Components/News/NewsDetail';
import Contacts from './Contacts';
import Nosotros from './Nosotros';
import ActivityDetail from "../../Components/Activities/ActivityDetail";


const Public = () => {
    return (
        <>
            {/* Header */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<NewsList />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/actividades/:id" element={<ActivityDetail />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/nosotros' element={<Nosotros />} />
            </Routes>
            {/* Footer */}
        </>
    );
};

export default Public;