import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer';
import TestimonialsBackoffice from "./Testimonials/TestimonialsBackoffice";
import ContactsBackoffice from './Contacts/ContactsBackoffice'
import NewsBackoffice from "./News/NewsBackoffice";
import ActivitiesBackoffice from "./Activities/ActivitiesBackoffice";

const Private = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<h1>Backoffice</h1>} />
                <Route path="/testimonials" element={<TestimonialsBackoffice />} />
                <Route path="/contacts" element={<ContactsBackoffice />} />
                <Route path="/news" element={<NewsBackoffice />} />
                <Route path="/activities" element={<ActivitiesBackoffice />} />
            </Routes>
            <Footer />
        </>
    );
};

export default Private;