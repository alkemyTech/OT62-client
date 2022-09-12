import React from "react";
import { Routes, Route } from "react-router-dom";
import TestimonialsBackoffice from "./Testimonials/TestimonialsBackoffice";

const Public = () => {
    return (
        <>
            {/* Header */}
            <Routes>
                <Route path="/" element={<h1>Private Routes</h1>}/>
                <Route path="/testimonials" element={<TestimonialsBackoffice />} />
            </Routes>
            {/* Footer */}
        </>
    );
};

export default Public;