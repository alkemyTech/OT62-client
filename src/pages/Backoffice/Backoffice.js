import React from "react";
import { Routes, Route } from "react-router-dom";
import TestimonialsBackoffice from "./Testimonials/TestimonialsBackoffice";
import ContactsBackoffice from './Contacts/ContactsBackoffice'

const Public = () => {
    return (
        <>
            {/* Header */}
            <Routes>
                <Route path="/" element={<h1>Private Routes</h1>} />
                <Route path="/testimonials" element={<TestimonialsBackoffice />} />
                <Route path="/contacts" element={<ContactsBackoffice />} />
            </Routes>
            {/* Footer */}
        </>
    );
};

export default Public;