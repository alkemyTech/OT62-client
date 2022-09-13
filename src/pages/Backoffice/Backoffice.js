import React from "react";
import { Routes, Route } from "react-router-dom";
import TestimonialsBackoffice from "./Testimonials/TestimonialsBackoffice";
import NewsBackoffice from "./News/NewsBackoffice";
import ActivitiesBackoffice from "./Activities/ActivitiesBackoffice";

const Private = () => {
    return (
        <>
            {/* Header */}
            <Routes>
                <Route path="/" element={<h1>Private Routes</h1>}/>
                <Route path="/testimonials" element={<TestimonialsBackoffice />} />
                <Route path="/news" element={<NewsBackoffice />} />
                <Route path="/activities" element={<ActivitiesBackoffice />} />
            </Routes>
            {/* Footer */}
        </>
    );
};

export default Private;