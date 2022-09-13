import React from "react";
import { Routes, Route } from "react-router-dom";
import TestimonialsBackoffice from "./Testimonials/TestimonialsBackoffice";
import NewsBackoffice from "./News/NewsBackoffice";

const Private = () => {
    return (
        <>
            {/* Header */}
            <Routes>
                <Route path="/" element={<h1>Private Routes</h1>}/>
                <Route path="/testimonials" element={<TestimonialsBackoffice />} />
                <Route path="/news" element={<NewsBackoffice />} />
            </Routes>
            {/* Footer */}
        </>
    );
};

export default Private;